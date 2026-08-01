import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Helper to load image for jsPDF
const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
};

interface QuoteData {
  businessType: string;
  service: string;
  profFee: number;
  govtFee: number;
  gst: number;
  total: number;
}

export async function generateQuotationPdf(data: QuoteData) {
  const doc = new jsPDF({ format: "a4", unit: "mm" });
  
  // A4 dimensions: 210 x 297
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;

  // Colors
  const primaryBlue = "#1E3A8A";
  const gold = "#F59E0B";
  const textDark = "#0F172A";
  const textGray = "#5A6A7A";
  const bgLight = "#F8FAFC";

  // --- HEADER ---
  try {
    const logoImg = await loadImage("/Nexus-logo.jpeg");
    doc.addImage(logoImg, "JPEG", margin, margin, 24, 24);
  } catch (e) {
    doc.setFontSize(20);
    doc.setTextColor(primaryBlue);
    doc.setFont("helvetica", "bold");
    doc.text("NEXUS SOLUTIONS", margin, margin + 8);
  }

  // Company Details (Right Aligned)
  doc.setFontSize(9);
  doc.setTextColor(textGray);
  doc.setFont("helvetica", "normal");
  
  const rightAlign = pageWidth - margin;
  doc.text("Business Growth & Compliance Partner", rightAlign, margin + 4, { align: "right" });
  doc.text("Address: Kalaburagi, Karnataka, India", rightAlign, margin + 9, { align: "right" });
  doc.text("Ph: +91 8073726564", rightAlign, margin + 14, { align: "right" });
  doc.text("Email: hello@nexussolutions.com", rightAlign, margin + 19, { align: "right" });
  doc.text("GSTIN: 29ABCDE1234F1Z5", rightAlign, margin + 24, { align: "right" });

  // Accent Line
  doc.setDrawColor(30, 58, 138); // primaryBlue
  doc.setLineWidth(0.5);
  doc.line(margin, 35, pageWidth - margin, 35);
  doc.setDrawColor(245, 158, 11); // gold
  doc.setLineWidth(1.5);
  doc.line(margin, 36.5, margin + 40, 36.5);

  // --- TITLE & META ---
  doc.setFontSize(24);
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.text("QUOTATION", pageWidth / 2, 50, { align: "center" });

  const quoteNo = `NXS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN');
  
  doc.setFontSize(10);
  doc.setTextColor(textDark);
  doc.text(`Quotation No: ${quoteNo}`, margin, 60);
  doc.text(`Date: ${dateStr}`, margin, 65);
  
  doc.text("Validity: 15 Days", rightAlign, 60, { align: "right" });
  doc.text("Prepared By: Nexus Expert Team", rightAlign, 65, { align: "right" });

  // --- CLIENT INFO BOX ---
  doc.setFillColor(bgLight);
  doc.roundedRect(margin, 72, pageWidth - (margin * 2), 30, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Prepared For:", margin + 5, 80);
  doc.text("Service Details:", pageWidth / 2 + 5, 80);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textGray);
  doc.text("Esteemed Client", margin + 5, 86);
  doc.text("New Business Entity", margin + 5, 91);
  doc.text("Karnataka, India", margin + 5, 96);

  doc.text(`Business Type: ${data.businessType}`, pageWidth / 2 + 5, 86);
  doc.text(`Requested Service: ${data.service}`, pageWidth / 2 + 5, 91);
  doc.text("Expected Timeline: 3-5 Working Days", pageWidth / 2 + 5, 96);

  // --- SERVICES TABLE ---
  autoTable(doc, {
    startY: 110,
    head: [["Sl No", "Service Description", "Prof. Fee", "Govt. Fee", "GST (18%)", "Total"]],
    body: [
      ["1", `${data.service} for ${data.businessType}`, `Rs ${data.profFee}`, `Rs ${data.govtFee}`, `Rs ${data.gst}`, `Rs ${data.total}`],
    ],
    theme: "grid",
    headStyles: { fillColor: [30, 58, 138], textColor: 255, fontStyle: "bold" },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    styles: { fontSize: 10, cellPadding: 6 },
    columnStyles: {
      0: { cellWidth: 15 },
      2: { halign: "right" },
      3: { halign: "right" },
      4: { halign: "right" },
      5: { halign: "right", fontStyle: "bold" }
    }
  });

  const finalY = (doc as any).lastAutoTable.finalY + 10;

  // --- PRICE SUMMARY BOX ---
  const summaryX = pageWidth - 80 - margin;
  doc.setFillColor(bgLight);
  doc.roundedRect(summaryX, finalY, 80, 45, 3, 3, "F");
  
  doc.setFontSize(10);
  doc.setTextColor(textGray);
  doc.text("Professional Fee:", summaryX + 5, finalY + 8);
  doc.text(`Rs ${data.profFee}`, rightAlign - 5, finalY + 8, { align: "right" });
  
  doc.text("Government Charges:", summaryX + 5, finalY + 15);
  doc.text(`Rs ${data.govtFee}`, rightAlign - 5, finalY + 15, { align: "right" });

  doc.text("GST (18%):", summaryX + 5, finalY + 22);
  doc.text(`Rs ${data.gst}`, rightAlign - 5, finalY + 22, { align: "right" });

  doc.setDrawColor(200);
  doc.line(summaryX + 5, finalY + 26, rightAlign - 5, finalY + 26);

  // Highlight Box for Total
  doc.setFillColor(primaryBlue);
  doc.rect(summaryX, finalY + 30, 80, 15, "F");
  doc.setTextColor(255);
  doc.setFont("helvetica", "bold");
  doc.text("TOTAL PAYABLE:", summaryX + 5, finalY + 40);
  doc.setFontSize(12);
  doc.text(`Rs ${data.total}`, rightAlign - 5, finalY + 40, { align: "right" });

  // --- TWO COLUMNS (INCLUSIONS & DOCS) ---
  const colY = finalY + 55; // Pushed below the Price Summary Box
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("What's Included", margin, colY);
  
  doc.setTextColor(textDark);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const inclusions = [
    "- Documentation & Filing",
    "- Government Liaisoning",
    "- Application Tracking",
    "- Dedicated Executive",
    "- Customer Support",
    "- Final Certificate Delivery"
  ];
  inclusions.forEach((inc, i) => {
    doc.text(inc, margin, colY + 8 + (i * 6));
  });

  const col2X = margin + 80;
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Documents Required", col2X, colY);
  
  doc.setTextColor(textDark);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const docs = [
    "[ ] PAN Card",
    "[ ] Aadhaar Card",
    "[ ] Address Proof / Electricity Bill",
    "[ ] Passport Size Photo",
    "[ ] Mobile Number",
    "[ ] Email Address"
  ];
  docs.forEach((docItem, i) => {
    doc.text(docItem, col2X, colY + 8 + (i * 6));
  });

  // --- TIMELINE ---
  const timelineY = colY + 50;
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Process Timeline (Estimated)", margin, timelineY);
  
  doc.setFillColor(bgLight);
  doc.roundedRect(margin, timelineY + 5, pageWidth - (margin * 2), 20, 2, 2, "F");
  
  doc.setTextColor(textDark);
  doc.setFontSize(8);
  doc.text("1. Docs Collection", margin + 5, timelineY + 13);
  doc.text("->", margin + 35, timelineY + 13);
  doc.text("2. Verification", margin + 45, timelineY + 13);
  doc.text("->", margin + 65, timelineY + 13);
  doc.text("3. Govt Filing", margin + 75, timelineY + 13);
  doc.text("->", margin + 95, timelineY + 13);
  doc.text("4. Approval", margin + 105, timelineY + 13);
  doc.text("->", margin + 125, timelineY + 13);
  doc.text("5. Delivery", margin + 135, timelineY + 13);

  // --- BANK & T&C ---
  const bottomY = timelineY + 35;
  
  // Bank Details
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Payment Details", margin, bottomY);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(textGray);
  doc.text("Bank: HDFC Bank", margin, bottomY + 6);
  doc.text("Account Name: Nexus Solutions", margin, bottomY + 11);
  doc.text("A/C No: 50200000000000", margin, bottomY + 16);
  doc.text("IFSC: HDFC0001234", margin, bottomY + 21);
  doc.text("UPI ID: nexus@hdfcbank", margin, bottomY + 26);
  
  // T&C
  const tcX = pageWidth / 2;
  doc.setTextColor(primaryBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Terms & Conditions", tcX, bottomY);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textGray);
  doc.text("• Government fees may change without prior notice.", tcX, bottomY + 6);
  doc.text("• Timeline strictly depends upon department approval.", tcX, bottomY + 11);
  doc.text("• Quotation valid for 15 days from the date of issue.", tcX, bottomY + 16);
  doc.text("• Payment is non-refundable after application submission.", tcX, bottomY + 21);
  doc.text("• GST extra wherever applicable.", tcX, bottomY + 26);

  // --- FOOTER ---
  doc.setFillColor(primaryBlue);
  doc.rect(0, pageHeight - 20, pageWidth, 20, "F");
  
  doc.setTextColor(255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Thank you for choosing Nexus Solutions", pageWidth / 2, pageHeight - 12, { align: "center" });
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("Business Growth & Compliance Partner | www.nexussolutions.com | +91 8073726564", pageWidth / 2, pageHeight - 7, { align: "center" });

  doc.save(`Nexus_Quotation_${data.businessType.replace(/\s+/g, "_")}.pdf`);
}
