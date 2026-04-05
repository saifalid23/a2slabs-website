"use server";

export async function submitContact(prevState: any, formData: FormData) {
  const payload = {
    fullName: formData.get("fullName"),
    workEmail: formData.get("workEmail"),
    companyName: formData.get("companyName"),
    staffSize: formData.get("staffSize"),
    annualRevenue: formData.get("annualRevenue"),
    painPoint: formData.get("painPoint"),
    serviceNeeded: formData.get("serviceNeeded"),
    timeline: formData.get("timeline"),
  };

  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxt4HR3CnGlsnSpppdUreoGOa3pVyaa3olLtmltdWyybwfZR8etBo0RdSXxx3AyhIEa/exec";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: new URLSearchParams(payload as any),
    });

    if (response.ok) {
      return { success: true, message: "Inquiry received." };
    } else {
      return { success: false, message: "Failed to send inquiry." };
    }
  } catch (error) {
    return { success: false, message: "Server error occurred." };
  }
}
