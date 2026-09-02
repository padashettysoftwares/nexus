"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Printer, FileText, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPANY_DETAILS = {
  name: "Nexus Solutions",
  phone: "+91 9483486111",
  altPhone: "+91 8073726564",
  email: "nexussolutionsglb@gmail.com",
  website: "https://nexusolutions.in",
  address: "Kalaburagi",
  logo: "/Nexus-logo.jpeg",
  signatureText: "Authorized Signatory",
};

const SERVICE_GROUPS = {
  "Software Quotation Phases & Features": [
    "Requirements Gathering & Analysis",
    "UI/UX Design & Prototyping",
    "Frontend UI Development",
    "Backend Development & APIs",
    "Database Architecture",
    "Admin Dashboard / CMS",
    "E-Commerce & Cart Functionality",
    "Payment Gateway Integration",
    "Third-party API Integrations",
    "Quality Assurance & Testing",
    "Server Setup & Deployment",
    "1-Year Maintenance & Support (AMC)",
    "SEO Setup & Optimization"
  ],
  "Web Services": [
    "Website Design",
    "Website Development",
    "Landing Page Development",
    "E-commerce Website",
    "Web Application Development",
    "Website Maintenance",
    "Website Redesign",
    "Hosting",
    "Domain"
  ],
  "Corporate Services": [
    "Business Registration",
    "GST & Tax",
    "Licences",
    "Quality Certifications",
    "Trademark & IP",
    "Import Export",
    "Govt. Registrations",
    "Accounting",
    "Annual Compliance",
    "Business Advisory",
    "Loan & Subsidy",
    "Automation & Tech"
  ]
};

interface LineItem {
  id: string;
  service: string;
  specs: string;
  qty: number;
  price: number;
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return "(DD/MM/YYYY)";
  const [year, month, day] = dateStr.split('-');
  if (!day) return dateStr;
  return `${day}/${month}/${year}`;
};

export function BillingSystem() {
  const [docType, setDocType] = useState<"bill" | "quotation">("bill");
  const [docNumber, setDocNumber] = useState("");
  
  // Client Details
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // Dates
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Items
  const [items, setItems] = useState<LineItem[]>([]);
  const [customItems, setCustomItems] = useState<Record<string, boolean>>({});

  // Totals
  const [taxRate, setTaxRate] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  
  // Extra
  const [projectDetails, setProjectDetails] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Generate initial doc number based on date and random
    const prefix = docType === "bill" ? "INV" : "QTN";
    const rand = Math.floor(1000 + Math.random() * 9000);
    setDocNumber(`${prefix}-${new Date().getFullYear()}-${rand}`);
    
    // Set default dates
    const today = new Date();
    setIssueDate(today.toISOString().split('T')[0]);
    
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    setDueDate(nextWeek.toISOString().split('T')[0]);
    
    if (items.length === 0) {
      addItem();
    }
  }, [docType]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Math.random().toString(36).substr(2, 9), service: SERVICE_GROUPS["Software Quotation Phases & Features"][0], specs: "", qty: 1, price: 0 }
    ]);
  };

  const updateItem = (id: string, field: keyof LineItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const grandTotal = subtotal + taxAmount - discount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 font-sans">
      {/* --- NO-PRINT AREA (Form Controls) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 print:hidden">
        
        {/* Left Side: Controls & Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 font-plus-jakarta">Document Type</h2>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setDocType("bill")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${docType === "bill" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                <FileText className="w-4 h-4" /> Invoice / Bill
              </button>
              <button
                onClick={() => setDocType("quotation")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${docType === "quotation" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                <FileSignature className="w-4 h-4" /> Quotation
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 font-plus-jakarta">Client Details</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Client Name</label>
                <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John Doe / Company" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Contact Number</label>
                <input type="text" value={clientContact} onChange={(e) => setClientContact(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</label>
                <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="client@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Address</label>
                <textarea value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" rows={2} placeholder="Complete Address" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 font-plus-jakarta">Document Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{docType === 'bill' ? 'Invoice No.' : 'Quote No.'}</label>
                <input type="text" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Date</label>
                <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">{docType === 'bill' ? 'Due Date' : 'Valid Until'}</label>
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 font-plus-jakarta">Project Overview (Cover Page)</h2>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Details & Scope</label>
              <textarea 
                value={projectDetails} 
                onChange={(e) => setProjectDetails(e.target.value)} 
                className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                rows={5} 
                placeholder="Optional: Describe the features, project overview, and scope. This will create a cover page before the quotation." 
              />
            </div>
          </div>

        </div>

        {/* Right Side: Items & Preview Toggle */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 overflow-x-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-bold text-gray-800 font-plus-jakarta">Services & Items</h2>
              <Button onClick={addItem} size="sm" variant="outline" className="gap-2">
                <Plus className="w-4 h-4" /> Add Item
              </Button>
            </div>
            
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="text-xs uppercase text-gray-500 border-b">
                  <th className="pb-2 w-[30%]">Service</th>
                  <th className="pb-2 w-[35%]">Specifications</th>
                  <th className="pb-2 w-[10%] text-center">Qty</th>
                  <th className="pb-2 w-[15%] text-right">Price (₹)</th>
                  <th className="pb-2 w-[10%]"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3 pr-2">
                      {!customItems[item.id] ? (
                        <select 
                          value={item.service}
                          onChange={(e) => {
                            if (e.target.value === "custom_item") {
                              setCustomItems({ ...customItems, [item.id]: true });
                              updateItem(item.id, 'service', '');
                            } else {
                              updateItem(item.id, 'service', e.target.value);
                            }
                          }}
                          className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                        >
                          <option value="" disabled>Select Service...</option>
                          {Object.entries(SERVICE_GROUPS).map(([groupName, services]) => (
                            <optgroup key={groupName} label={groupName}>
                              {services.map(s => <option key={s} value={s}>{s}</option>)}
                            </optgroup>
                          ))}
                          <option value="custom_item" className="font-bold text-blue-600">+ Type Custom Item...</option>
                        </select>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <input 
                            type="text"
                            value={item.service}
                            onChange={(e) => updateItem(item.id, 'service', e.target.value)}
                            placeholder="Type item name..."
                            autoFocus
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                          />
                          <button 
                            onClick={() => {
                              const newCustom = { ...customItems };
                              delete newCustom[item.id];
                              setCustomItems(newCustom);
                              updateItem(item.id, 'service', SERVICE_GROUPS["Software Quotation Phases & Features"][0]);
                            }}
                            className="text-[10px] text-blue-600 font-semibold self-end hover:underline"
                          >
                            Back to List
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-2">
                      <input 
                        type="text" 
                        value={item.specs}
                        onChange={(e) => updateItem(item.id, 'specs', e.target.value)}
                        placeholder="Details..."
                        className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 px-2">
                      <input 
                        type="number" 
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateItem(item.id, 'qty', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-center"
                      />
                    </td>
                    <td className="py-3 px-2">
                      <input 
                        type="number" 
                        min="0"
                        value={item.price}
                        onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-right"
                      />
                    </td>
                    <td className="py-3 pl-2 text-right">
                      <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                 <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Notes / Terms</label>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" rows={3} placeholder="Thank you for your business..." />
                </div>
              </div>
              <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Subtotal:</span>
                  <span className="font-bold text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm gap-4">
                  <span className="text-gray-600 font-medium whitespace-nowrap">Tax (%) (Optional):</span>
                  <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)} className="w-24 p-1 border border-gray-200 rounded flex-shrink-0 text-right focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                </div>
                <div className="flex justify-between items-center text-sm gap-4">
                  <span className="text-gray-600 font-medium whitespace-nowrap">Discount (₹) (Optional):</span>
                  <input type="number" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)} className="w-24 p-1 border border-gray-200 rounded flex-shrink-0 text-right focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                </div>
                <div className="flex justify-between items-center text-lg pt-2 border-t border-gray-200">
                  <span className="text-gray-800 font-bold">Grand Total:</span>
                  <span className="font-bold text-[#dc2626]">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12 rounded-xl shadow-lg shadow-blue-500/30 gap-2">
              <Printer className="w-5 h-5" /> Print / Save as PDF
            </Button>
          </div>

        </div>
      </div>


      {/* --- PRINT AREA (Document Preview) --- */}
      {/* On screen, we show it below the form as a preview. On print, it becomes the ONLY thing visible. */}
      <div className="mx-auto mt-16 print:mt-0 print:m-0 print:max-w-none print:shadow-none flex flex-col gap-8 print:gap-0 relative overflow-hidden print:block print-wrapper">
        
        {/* Page 1: Cover Page (If details exist) */}
        {projectDetails && (
          <div className="max-w-[210mm] w-full mx-auto bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none min-h-[297mm] print:break-after-page mb-8 print:mb-0">
            <div className="print-container w-full h-full p-10 md:p-12 text-[13px] font-sans text-gray-800 leading-relaxed flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 p-2 shrink-0">
                    <img src={COMPANY_DETAILS.logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight font-plus-jakarta">PROJECT PROPOSAL</h1>
                    <p className="text-[#dc2626] font-bold text-[10px] tracking-widest uppercase mt-0.5">SOFTWARE & CORPORATE SERVICES</p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <h2 className="text-lg font-bold text-gray-900 font-plus-jakarta">{COMPANY_DETAILS.name}</h2>
                  <p className="text-gray-500 mt-1">{COMPANY_DETAILS.address}</p>
                  <p className="text-gray-500">{COMPANY_DETAILS.phone} | {COMPANY_DETAILS.altPhone}</p>
                  <p className="text-gray-500">{COMPANY_DETAILS.email}</p>
                  <p className="text-blue-600 font-medium">{COMPANY_DETAILS.website}</p>
                </div>
              </div>

              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-plus-jakarta border-b pb-4">Project Overview & Scope</h2>
                <div className="text-[14px] text-gray-800 leading-[1.8]">
                  {projectDetails.split('\n').map((line, i) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                      return (
                        <div key={i} className="flex gap-3 my-1.5 ml-4">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{trimmed.substring(2)}</span>
                        </div>
                      );
                    }
                    if (trimmed === '') {
                      return <div key={i} className="h-5"></div>;
                    }
                    if (trimmed.endsWith(':') || (trimmed === trimmed.toUpperCase() && trimmed.length > 3)) {
                      return <div key={i} className="mt-5 mb-2 font-bold text-gray-900 text-[15px]">{line}</div>;
                    }
                    return <div key={i} className="my-1.5">{line}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page 2: Quotation/Invoice Table */}
        <div className="max-w-[210mm] w-full mx-auto bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none min-h-[297mm]">
          <div className="print-container w-full h-full p-10 md:p-12 text-[13px] font-sans text-gray-800 leading-relaxed">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8 pb-6 border-b-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 p-2 shrink-0">
                  <img src={COMPANY_DETAILS.logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight font-plus-jakarta">{docType === 'bill' ? 'INVOICE' : 'QUOTATION'}</h1>
                  <p className="text-[#dc2626] font-bold text-[10px] tracking-widest uppercase mt-0.5">SOFTWARE & CORPORATE SERVICES</p>
                </div>
              </div>
              <div className="text-right text-xs">
                <h2 className="text-lg font-bold text-gray-900 font-plus-jakarta">{COMPANY_DETAILS.name}</h2>
                <p className="text-gray-500 mt-1">{COMPANY_DETAILS.address}</p>
                <p className="text-gray-500">{COMPANY_DETAILS.phone} | {COMPANY_DETAILS.altPhone}</p>
                <p className="text-gray-500">{COMPANY_DETAILS.email}</p>
                <p className="text-blue-600 font-medium">{COMPANY_DETAILS.website}</p>
              </div>
            </div>

          {/* Details Row */}
          <div className="flex justify-between items-start mb-8 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
            <div className="w-1/2 pr-6">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">{docType === 'bill' ? 'Bill To:' : 'Client Information:'}</h3>
              <p className="font-bold text-gray-900 text-base mb-1">{clientName || "(Client Name)"}</p>
              {clientAddress && <p className="text-gray-600 text-xs mb-1 whitespace-pre-wrap">{clientAddress}</p>}
              {clientContact && <p className="text-gray-600 text-xs mb-0.5"><span className="font-medium">Phone:</span> {clientContact}</p>}
              {clientEmail && <p className="text-gray-600 text-xs"><span className="font-medium">Email:</span> {clientEmail}</p>}
            </div>
            <div className="w-1/2 pl-6 border-l border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-1.5 font-semibold text-gray-500 text-xs uppercase tracking-wider">{docType === 'bill' ? 'Invoice No:' : 'Quote No:'}</td>
                    <td className="py-1.5 text-right font-bold text-gray-900">{docNumber}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-semibold text-gray-500 text-xs uppercase tracking-wider">Date:</td>
                    <td className="py-1.5 text-right font-medium text-gray-900">{formatDate(issueDate)}</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-semibold text-gray-500 text-xs uppercase tracking-wider">{docType === 'bill' ? 'Due Date:' : 'Valid Until:'}</td>
                    <td className="py-1.5 text-right font-medium text-gray-900">{formatDate(dueDate)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Items Table */}
          <div className="min-h-[300px]">
            <table className="w-full text-left mb-8">
              <thead>
                <tr className="bg-[#dc2626] text-white">
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-l-lg w-[25%]">ITEM</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider w-[40%]">SPECIFICATIONS</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-center w-[7%]">QTY</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-right w-[14%] whitespace-nowrap">PRICE</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider text-right rounded-r-lg w-[14%] whitespace-nowrap">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-2"></tr>
                {items.map((item, idx) => (
                  <tr key={item.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-4 align-top">
                      <div className="font-bold text-gray-900">{item.service}</div>
                    </td>
                    <td className="py-4 px-4 align-top text-gray-600">
                      <span className="whitespace-pre-wrap text-xs">{item.specs || "-"}</span>
                    </td>
                    <td className="py-4 px-4 align-top text-center font-medium text-gray-700">{item.qty}</td>
                    <td className="py-4 px-4 align-top text-right text-gray-600 font-medium whitespace-nowrap">
                      {item.price === 0 ? <span className="font-bold text-[#dc2626] uppercase tracking-widest text-[10px]">FREE</span> : `₹${item.price.toFixed(2)}`}
                    </td>
                    <td className="py-4 px-4 align-top text-right font-bold text-gray-900 whitespace-nowrap">
                      {(item.qty * item.price) === 0 ? <span className="font-bold text-[#dc2626] uppercase tracking-widest text-[10px]">FREE</span> : `₹${(item.qty * item.price).toFixed(2)}`}
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                   <tr><td colSpan={5} className="py-8 text-center text-gray-400 font-medium">No items added</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Totals & Notes Row */}
          <div className="flex justify-between items-start pt-6 border-t-2 border-gray-100">
            <div className="w-7/12 pr-12">
               {notes && (
                 <div>
                   <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Notes & Terms</h3>
                   <p className="text-gray-600 text-xs whitespace-pre-wrap leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">{notes}</p>
                 </div>
               )}
            </div>
            
            <div className="w-5/12">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-500 font-bold text-xs uppercase tracking-wider">SUBTOTAL</td>
                    <td className="py-2 text-right text-gray-900 font-bold">₹{subtotal.toFixed(2)}</td>
                  </tr>
                  {taxRate > 0 && (
                    <tr>
                      <td className="py-2 text-gray-500 font-bold text-xs uppercase tracking-wider">TAX ({taxRate}%)</td>
                      <td className="py-2 text-right text-gray-900 font-bold">₹{taxAmount.toFixed(2)}</td>
                    </tr>
                  )}
                  {discount > 0 && (
                    <tr>
                      <td className="py-2 text-gray-500 font-bold text-xs uppercase tracking-wider">DISCOUNT</td>
                      <td className="py-2 text-right text-[#dc2626] font-bold">- ₹{discount.toFixed(2)}</td>
                    </tr>
                  )}
                  <tr className="border-t-2 border-gray-200">
                    <td className="py-4 text-base font-bold text-gray-900 font-plus-jakarta">GRAND TOTAL</td>
                    <td className="py-4 text-right text-xl font-bold text-[#dc2626] font-plus-jakarta">₹{grandTotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer & Signature */}
          <div className="absolute bottom-12 left-10 right-10 flex justify-between items-end border-t border-gray-200 pt-6">
            <div className="text-xs">
              <p className="text-gray-400 font-medium">If you have any queries related to this document, please contact us.</p>
              <p className="text-gray-800 font-bold mt-1">{COMPANY_DETAILS.name} — {COMPANY_DETAILS.phone}</p>
            </div>
            
            <div className="text-center w-48">
               <div className="h-14 flex items-center justify-center mb-3 opacity-60 mix-blend-multiply">
                  <img src="/Nexus-logo.jpeg" alt="Signature Stamp" className="max-h-full object-contain grayscale" />
               </div>
               <div className="w-full border-t-2 border-gray-300 mx-auto"></div>
               <p className="mt-2 text-gray-800 text-xs font-bold uppercase tracking-wider">{COMPANY_DETAILS.signatureText}</p>
               <p className="text-gray-500 text-[10px] mt-0.5">{COMPANY_DETAILS.name}</p>
            </div>
          </div>

        </div>
      </div>
      
      </div>
      
      {/* Global CSS to handle printing logic cleanly */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
          }
          /* Make the print wrapper and all its children visible */
          .print-wrapper, .print-wrapper * {
            visibility: visible !important;
          }
          /* Ensure backgrounds print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Position it absolute to the top left of the page */
          .print-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0 !important;
          }
          .print-container {
            padding: 40px !important; /* Proper padding inside A4 */
          }
          /* Hide scrollbars, headers, etc */
          @page {
            size: A4;
            margin: 0mm; 
          }
          /* Make sure inputs and buttons don't show up in print */
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />

    </div>
  );
}
