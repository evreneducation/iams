// src/components/RegistrationForm.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "@fontsource/arsenal"; // defaults to weight 400
import { Info } from "lucide-react";
/**
 * RegistrationForm.jsx
 * Full React conversion of the provided multi-step HTML registration form.
 *
 * - Stores each step in React state
 * - Dynamically generates attendee forms based on group size
 * - Validates required fields for each step
 * - Combines all data and sends to backend on final submit
 * - Keeps the visual style and layout from the original HTML (TailwindCSS)
 *
 * Usage: import RegistrationForm from './components/RegistrationForm' and render it.
 */

const CARD_FEE = 0.03; // 3% fee

const delegateTypes = [
  {
    id: "airline",
    label: "Airline , Airport , Hotel & Car Rental",
    description:
      "Includes all Airlines, LCCs, ULCCs, Airport Operators, Hotels, and Car Rental Companies .",
    fee: 600,
    bgClass: "bg-green-50/50",
    textClass: "text-green-700",
  },
  {
    id: "supplier",
    label: "Aviation Technology , Supplier , Support Services",
    description:
      "Includes Technology Providers, Consultants, GDS, Service Vendors, Banks, FinTech & Insurance(Non-Sponsoring).",
    fee: 1900,
    bgClass: "bg-yellow-50/50",
    textClass: "text-yellow-700",
  },
  {
    id: "general",
    label: "General Attendee & Media",
    description:
      "Includes Institutions, Trade bodies, Media, and Non-Airline / Non-Vendor Participants.",
    fee: 900,
    bgClass: "bg-red-50/50",
    textClass: "text-red-700",
  },
];

const defaultAttendee = (index) => ({
  title: "",
  designation: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  index,
});

const RegistrationForm = () => {
  // Step 4 condition tracking state

  const navigate = useNavigate();
  // Step index (0..3)
  const [currentStep, setCurrentStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Step 1: delegate type + group size
  const [delegateTypeId, setDelegateTypeId] = useState("");
  const [groupSize, setGroupSize] = useState(1);

  // Attendee data array (length = groupSize)
  const [attendees, setAttendees] = useState([defaultAttendee(0)]);

  // Step 3: company / strategic info
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyHQ, setCompanyHQ] = useState("");
  const [industrySector, setIndustrySector] = useState("");

  const [strategicObjective, setStrategicObjective] = useState("");
  const [referredBy, setReferredBy] = useState("");

  // Step 4 consents
  const [termsConsent, setTermsConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [updatesConsent, setUpdatesConsent] = useState(false);
  const [showProvisionalModal, setShowProvisionalModal] = useState(false);
  const [provisionalTCs, setProvisionalTCs] = useState({
    eligibility: false,
    validityPeriod: false,
    paymentDeadline: false,
    invoiceConfirmation: false,
    seatAvailability: false,
  });

  const allProvisionalTCsChecked = () =>
    Object.values(provisionalTCs).every(Boolean);

  // UI: progress, selected card styling
  const [selectedCard, setSelectedCard] = useState(null);

  // Submit / loading / success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // payment traking

  const [instantPayment, setInstantPayment] = useState(false);
  const [holdPayment, setHoldPayment] = useState(false);

  // Summary computed values
  const selectedDelegate = delegateTypes.find((d) => d.id === delegateTypeId);
  const computeDiscountRate = (num) => {
    if (num === 1) return 0; // no discount
    if (num === 2) return 0.5 / 2; // 50% off one of two → 25% per person
    if (num === 3) return 1 / 3; // 100% off one of three → 33.33% per person
    if (num >= 4) return 0.4; // 40% off for all
    return 0;
  };

  useEffect(() => {
    // keep attendees array in sync with groupSize
    const size = Number(groupSize) || 1;
    setAttendees((prev) => {
      const newArr = [...prev];
      if (newArr.length > size) {
        newArr.length = size;
        return newArr;
      }
      while (newArr.length < size) {
        newArr.push(defaultAttendee(newArr.length));
      }
      return newArr;
    });
  }, [groupSize]);

  // Validation helper for current step
  const validateCurrentStep = () => {
    if (currentStep === 0) {
      // Must choose delegateType and groupSize in reasonable range (1..10)
      if (!delegateTypeId) {
        alert("Please select a delegate type.");
        return false;
      }
      const size = Number(groupSize);
      if (isNaN(size) || size < 1 || size > 10) {
        alert("Please select a valid group size (1-10).");
        return false;
      }
      return true;
    }

    if (currentStep === 1) {
      for (let i = 0; i < attendees.length; i++) {
        const a = attendees[i];
        if (!a.title || !a.designation || !a.firstName || !a.lastName) {
          alert(`Please fill required fields for Attendee ${i + 1}.`);
          return false;
        }
        if (i === 0) {
          // Validate email
          const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
          if (!a.email || !emailPattern.test(a.email)) {
            alert("Please enter a valid email address for Attendee 1.");
            return false;
          }

          // Validate mobile (digits only, min 7, max 15)
          const mobilePattern = /^[0-9]{7,15}$/;
          if (!a.mobile || !mobilePattern.test(a.mobile)) {
            alert(
              "Please enter a valid mobile number (digits only, 7-15 digits) for Attendee 1."
            );
            return false;
          }
        }
      }

      return true;
    }

    if (currentStep === 2) {
      if (!companyName || !companyHQ || !strategicObjective) {
        alert("Please complete company profile & strategic objective.");
        return false;
      }
      return true;
    }

    if (currentStep === 3) {
      if (!termsConsent || !privacyConsent) {
        alert("You must agree to the mandatory Terms and Privacy consents.");
        return false;
      }
      // 🔹 Payment option check
      if (!instantPayment && !holdPayment) {
        alert(
          "Please select a payment option: Instant Payment or 15-Day Hold."
        );
        return false;
      }
      return true;
    }

    return true;
  };

  const showStep = (index) => {
    setCurrentStep(index);
  };

  const nextStep = () => {
    if (!validateCurrentStep()) return;
    if (currentStep < 3) {
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  // Attendee field updates (controlled)
  const updateAttendeeField = (idx, field, value) => {
    setAttendees((prev) => {
      const cp = prev.map((a) => ({ ...a }));
      cp[idx] = { ...cp[idx], [field]: value };
      return cp;
    });
  };

  // calculate totals for summary
  const calculateTotals = () => {
    const size = Number(groupSize) || 1;
    const feePer = selectedDelegate ? Number(selectedDelegate.fee) : 0;
    const discountRate = computeDiscountRate(size);

    let subtotal = feePer * size;
    let discountAmount = 0;
    const originalTotal = feePer * size;

    if (size === 2) discountAmount = feePer * 1 * 0.5; // 50% of 1 attendee
    else if (size === 3) discountAmount = feePer * 1 * 1; // 100% of 1 attendee
    else if (size >= 4) discountAmount = subtotal * 0.4; // 40% off total
    // size 1 → discountAmount = 0

    subtotal = subtotal - discountAmount;
    // const cardFee = subtotal * CARD_FEE;
    const total = subtotal;

    return {
      feePer,
      size,
      discountRate,
      discountAmount,
      subtotal,
      total,
      originalTotal,
    };
  };

  // build payload and submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate final step before submission
    if (!validateCurrentStep()) return;

    const totals = calculateTotals();

    const payload = {
      delegateType: selectedDelegate ? selectedDelegate.label : null,
      delegateTypeId: delegateTypeId,
      feePer: totals.feePer,
      groupSize: totals.size,
      discountRate: totals.discountRate,
      discountAmount: totals.discountAmount,
      // cardFee: totals.cardFee,
      total: totals.total,
      instantPayment: instantPayment,
      holdPayment: holdPayment,
      attendees: attendees.map((a) => ({
        name: `${a.firstName} ${a.lastName}`,
        email: a.email,
        designation: a.designation,
        phone: a.mobile,
        title: a.title,
      })),
      companyProfile: {
        companyName,
        companyWebsite,
        industrySector,
        companyHQ,
        strategicObjective,
        referredBy,
      },
      consents: {
        termsConsent,
        privacyConsent,
        updatesConsent,
      },
      meta: {
        submittedAt: new Date().toISOString(),
      },
    };

    console.log(payload);
    try {
      setIsSubmitting(true);

      axios
        .post("https://iamsbackend.onrender.com/api/iams/reg/register", payload)
        .then((res) => {
          console.log(res);
          if (res.data.message) {
            alert("Registerd SucessFully");
            setSubmittedSuccess(true);
            navigate("/registration-form");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Registeratio failed");
        });
    } catch (err) {
      console.error("Submission error:", err);
      alert(
        "Failed to submit registration. Please try again later or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // build summary snippet HTML (JSX)
  const SummaryBox = () => {
    const totals = calculateTotals();
    return (
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h3>
        <div className="space-y-2 text-gray-600">
          <p>
            Delegate Type:{" "}
            <span className="font-semibold">
              {selectedDelegate?.label || "-"}
            </span>
          </p>
          <p>
            Delegates: <span className="font-semibold">{totals.size}</span>
          </p>
          <p>
            Total Rate (Before Discount):{" "}
            <span className="font-semibold">
              {" "}
              USD {totals.originalTotal}.00
            </span>
          </p>
          {totals.discountAmount > 0 && (
            <p className="text-red-500">
              Group Discount ({(totals.discountRate * 100).toFixed(0)}%):{" "}
              <span className="font-semibold">
                {" "}
                USD {totals.discountAmount.toFixed(2)}{" "}
              </span>
            </p>
          )}
          <p>
            Subtotal:{" "}
            <span className="font-semibold">
              {" "}
              USD {totals.subtotal.toFixed(2)}
            </span>
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center font-bold text-gray-900">
            <span>Total Due</span>
            <span className="text-2xl text-indigo-600">
              {" "}
              USD {totals.total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Progress width as percent
  const progressPercent = `${((currentStep + 1) / 4) * 100}%`;

  return (
    <div
      className="min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8 bg-gray-50"
      style={{ fontFamily: "Arsenal" }}
    >
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden my-10">
        {/* Header */}
        <header className="p-6 sm:p-8 text-white bg-[#15A4B3]">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            International Aviation Marketing Summit 2026
          </h1>
          <p className="mt-1 text-blue-200 text-sm sm:text-base">
            Registration: Holiday Inn New Delhi Aerocity | April 9-10, 2026
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 space-y-8"
          style={{ fontFamily: "Arsenal" }}
        >
          {/* Progress bar + titles */}
          <div className="mb-8">
            <div id="status-bar" className="h-2 bg-gray-200 rounded-full">
              <div
                id="progress-bar"
                className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: progressPercent }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs sm:text-sm font-medium text-gray-500">
              <span
                id="step-title-1"
                className={
                  currentStep === 0 ? "text-[#15A4B3]" : "text-gray-500"
                }
              >
                1. Delegate Type
              </span>
              <span
                id="step-title-2"
                className={
                  currentStep === 1 ? "text-[#15A4B3]" : "text-gray-500"
                }
              >
                2. Attendee Details
              </span>
              <span
                id="step-title-3"
                className={
                  currentStep === 2 ? "text-[#15A4B3]" : "text-gray-500"
                }
              >
                3. Business Profile
              </span>
              <span
                id="step-title-4"
                className={
                  currentStep === 3 ? "text-[#15A4B3]" : "text-gray-500"
                }
              >
                4. Review & Payment
              </span>
            </div>
          </div>

          {/* Step 1 */}
          <section
            id="step-1"
            className={currentStep !== 0 ? "hidden" : ""}
            style={{ fontFamily: "Arsenal" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 1: Select Delegate Type
            </h2>
            <p className="text-gray-600 mb-6">
              Please select the category that best describes your organization.
              This helps us tailor your summit experience and networking.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {delegateTypes.map((type) => (
                <label key={type.id} className="cursor-pointer">
                  <input
                    type="radio"
                    name="delegate_type"
                    value={type.id}
                    className="hidden"
                    required
                    checked={delegateTypeId === type.id}
                    onChange={() => {
                      setDelegateTypeId(type.id);
                      setSelectedCard(type.id);
                    }}
                  />
                  <div
                    className={`p-6 border-2 rounded-lg shadow-md transition cursor-pointer ${
                      selectedCard === type.id
                        ? "border-indigo-600 shadow-xl"
                        : "border-transparent hover:shadow-lg"
                    } ${type.bgClass}`}
                  >
                    <h3 className={`font-bold text-lg ${type.textClass}`}>
                      {type.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {type.description}
                    </p>
                    <p
                      className={`text-2xl font-extrabold mt-3 ${type.textClass}`}
                    >
                      {type.fee === 0
                        ? "Complimentary"
                        : `USD ${type.fee.toLocaleString()} `}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-8" style={{ fontFamily: "Arsenal" }}>
              <select
                id="group-size"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                value={groupSize}
                onChange={(e) => setGroupSize(Number(e.target.value))}
              >
                {Array.from({ length: 4 }).map((_, i) => {
                  let label = "";
                  switch (i + 1) {
                    case 1:
                      label = "1 Attendee - Full amount";
                      break;
                    case 2:
                      label = "2 Attendees - 25% off";
                      break;
                    case 3:
                      label = "3 Attendees - 33% off";
                      break;
                    case 4:
                      label = "4 Attendees - 40% off";
                      break;
                    default:
                      label = `${i + 1} Attendees`;
                  }
                  return (
                    <option key={i} value={i + 1}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>
          </section>

          {/* Step 2 */}
          <section
            id="step-2"
            className={currentStep !== 1 ? "hidden" : ""}
            style={{ fontFamily: "Arsenal" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Step 2: Attendee Information
            </h2>
            <p className="text-gray-600 mb-6">
              These details will be used for your badge, IAMS 2026 guide, and
              official communications. Please ensure all information is complete
              and accurate.
            </p>

            <div
              id="attendee-forms"
              className="space-y-8"
              style={{ fontFamily: "Arsenal" }}
            >
              {attendees.map((a, idx) => (
                <div
                  key={idx}
                  className={`p-6 border border-gray-200 rounded-lg bg-white shadow-sm ${
                    idx === 0 ? "group-contact" : ""
                  }`}
                  style={{ fontFamily: "Arsenal" }}
                >
                  <h4 className="text-lg font-bold text-[#15A4B3] mb-4">
                    {idx === 0
                      ? "Group Contact (Attendee 1)"
                      : `Attendee ${idx + 1}`}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Title{" "}
                        <span
                          className="text-red-500"
                          style={{ fontFamily: "Arsenal" }}
                        >
                          *
                        </span>
                      </label>
                      <select
                        name={`title_${idx}`}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                        value={a.title}
                        onChange={(e) =>
                          updateAttendeeField(idx, "title", e.target.value)
                        }
                        style={{ fontFamily: "Arsenal" }}
                      >
                        <option value="">Select</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                      </select>
                    </div>

                    <div style={{ fontFamily: "Arsenal" }}>
                      <label className="block text-sm font-medium text-gray-700">
                        Job Title/Designation{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name={`designation_${idx}`}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                        value={a.designation}
                        onChange={(e) =>
                          updateAttendeeField(
                            idx,
                            "designation",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div style={{ fontFamily: "Arsenal" }}>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name={`first_name_${idx}`}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                        value={a.firstName}
                        onChange={(e) =>
                          updateAttendeeField(idx, "firstName", e.target.value)
                        }
                      />
                    </div>

                    <div style={{ fontFamily: "Arsenal" }}>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name={`last_name_${idx}`}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                        value={a.lastName}
                        onChange={(e) =>
                          updateAttendeeField(idx, "lastName", e.target.value)
                        }
                      />
                    </div>

                    {idx === 0 && (
                      <>
                        <div
                          className="sm:col-span-2"
                          style={{ fontFamily: "Arsenal" }}
                        >
                          <label className="block text-sm font-medium text-gray-700">
                            Email Address (Primary Contact){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name={`email_${idx}`}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                            value={a.email}
                            required
                            onChange={(e) =>
                              updateAttendeeField(idx, "email", e.target.value)
                            }
                          />
                        </div>

                        <div
                          className="sm:col-span-2"
                          style={{ fontFamily: "Arsenal" }}
                        >
                          <label className="block text-sm font-medium text-gray-700">
                            Mobile Number (with Country Code){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name={`mobile_${idx}`}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                            value={a.mobile}
                            onChange={(e) => {
                              // only allow digits
                              const digitsOnly = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                              updateAttendeeField(idx, "mobile", digitsOnly);
                            }}
                            maxLength={20} // optional
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 3 */}
          <section
            id="step-3"
            className={currentStep !== 2 ? "hidden" : ""}
            style={{ fontFamily: "Arsenal" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Step 3: Strategic Profile & Networking
            </h2>
            <p className="text-gray-600 mb-6">
              Help us optimize your B2B Connect experience by providing
              information about your organization and networking objectives. .
            </p>

            <div className="space-y-4" style={{ fontFamily: "Arsenal" }}>
              <div>
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div style={{ fontFamily: "Arsenal" }}>
                <label
                  htmlFor="company-hq"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Headquarters Country{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="company-hq"
                  value={companyHQ}
                  onChange={(e) => setCompanyHQ(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a country</option>
                  {[
                    "Afghanistan",
                    "Albania",
                    "Algeria",
                    "Andorra",
                    "Angola",
                    "Argentina",
                    "Armenia",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bahamas",
                    "Bahrain",
                    "Bangladesh",
                    "Barbados",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bhutan",
                    "Bolivia",
                    "Bosnia and Herzegovina",
                    "Botswana",
                    "Brazil",
                    "Brunei",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burundi",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Chile",
                    "China",
                    "Colombia",
                    "Comoros",
                    "Costa Rica",
                    "Croatia",
                    "Cuba",
                    "Cyprus",
                    "Czech Republic",
                    "Denmark",
                    "Dominican Republic",
                    "Ecuador",
                    "Egypt",
                    "El Salvador",
                    "Estonia",
                    "Ethiopia",
                    "Fiji",
                    "Finland",
                    "France",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Greece",
                    "Guatemala",
                    "Haiti",
                    "Honduras",
                    "Hungary",
                    "Iceland",
                    "India",
                    "Indonesia",
                    "Iran",
                    "Iraq",
                    "Ireland",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Laos",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Lithuania",
                    "Luxembourg",
                    "Madagascar",
                    "Malawi",
                    "Malaysia",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Mauritania",
                    "Mauritius",
                    "Mexico",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montenegro",
                    "Morocco",
                    "Mozambique",
                    "Myanmar",
                    "Namibia",
                    "Nepal",
                    "Netherlands",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "North Korea",
                    "North Macedonia",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Philippines",
                    "Poland",
                    "Portugal",
                    "Qatar",
                    "Romania",
                    "Russia",
                    "Rwanda",
                    "Saudi Arabia",
                    "Senegal",
                    "Serbia",
                    "Seychelles",
                    "Singapore",
                    "Slovakia",
                    "Slovenia",
                    "Somalia",
                    "South Africa",
                    "South Korea",
                    "Spain",
                    "Sri Lanka",
                    "Sudan",
                    "Suriname",
                    "Sweden",
                    "Switzerland",
                    "Syria",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania",
                    "Thailand",
                    "Togo",
                    "Trinidad and Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Uganda",
                    "Ukraine",
                    "United Arab Emirates",
                    "United Kingdom",
                    "United States",
                    "Uruguay",
                    "Uzbekistan",
                    "Venezuela",
                    "Vietnam",
                    "Yemen",
                    "Zambia",
                    "Zimbabwe",
                  ].map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Website
                </label>
                <input
                  id="company-website"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div style={{ fontFamily: "Arsenal" }}>
                <label
                  htmlFor="industry-sector"
                  className="block text-sm font-medium text-gray-700"
                >
                  Industry Sector <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry-sector"
                  value={industrySector}
                  onChange={(e) => setIndustrySector(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select your industry sector</option>
                  {[
                    "Airline",
                    "Airport / Airport Management",
                    "IT Solution",
                    "System Provider",
                    "Architect / Advisor / Consultant",
                    "Hotel / Car Rental / Insurance",
                    "Bank / Credit Card / Fintech",
                    "Press / Media",
                    "Industry / Association / Institution",
                    "Others",
                  ].map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ fontFamily: "Arsenal" }}>
                <label
                  htmlFor="strategic-objectives"
                  className="block text-sm font-medium text-gray-700"
                >
                  Primary Strategic Objective for Attending (max 150 words){" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="strategic-objectives"
                  rows="4"
                  maxLength={150}
                  value={strategicObjective}
                  onChange={(e) => setStrategicObjective(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                  placeholder="e.g., 'To secure a partnership with a Star Alliance member' or 'To showcase our new AI-driven pricing solution.'"
                ></textarea>
              </div>

              <div style={{ fontFamily: "Arsenal" }} className="relative">
                <label
                  htmlFor="referred-by"
                  className="block text-sm font-medium text-gray-700 flex items-center"
                >
                  GST/VAT/TVA number (Optional)
                  <button
                    type="button"
                    onClick={() => setShowTooltip(!showTooltip)}
                    className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                  >
                    <Info size={16} />
                  </button>
                </label>

                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute z-10 mt-1 w-80 p-3 bg-white border border-gray-300 rounded-lg shadow-lg text-sm text-gray-700">
                    Please note, Delegates registering from the European Union
                    (EU/EEA) companies can state your VAT/TVA number on your
                    invoice for compliance reasons and to avoid over-taxation.
                  </div>
                )}

                <input
                  id="referred-by"
                  value={referredBy}
                  onChange={(e) => setReferredBy(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* Step 4 */}
          {/* Step 4 */}
          <section
            id="step-4"
            className={currentStep !== 3 ? "hidden" : ""}
            style={{ fontFamily: "Arsenal" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Step 4: Review, Consent & Payment
            </h2>

            <SummaryBox />

            <div className="space-y-4">
              {/* Existing Consents */}
              <div className="flex items-start">
                <input
                  id="terms-consent"
                  type="checkbox"
                  checked={termsConsent}
                  onChange={(e) => setTermsConsent(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="terms-consent"
                  className="ml-3 text-sm text-gray-700"
                >
                  I have read and agree to the{" "}
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    <u>Terms and Conditions</u>,
                  </a>
                  , including the <b>cancellation policy.</b>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="privacy-consent"
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="privacy-consent"
                  className="ml-3 text-sm text-gray-700"
                >
                  I consent to my details being shared with event partners and
                  fellow attendees for networking purposes.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  id="updates-consent"
                  type="checkbox"
                  checked={updatesConsent}
                  onChange={(e) => setUpdatesConsent(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1"
                />
                <label
                  htmlFor="updates-consent"
                  className="ml-3 text-sm text-gray-700"
                >
                  I would like to receive future updates and newsletters from{" "}
                  <b>Traveon Ventures LLP.</b>
                </label>
              </div>

              {/* Payment Options */}
              <div className="mt-6 p-6 border-2 border-dashed border-indigo-300 rounded-lg bg-indigo-50 space-y-3">
                <h4 className="text-lg font-semibold text-indigo-800">
                  Payment Options
                </h4>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="instant-payment"
                    checked={instantPayment}
                    disabled={false}
                    onChange={(e) => {
                      setInstantPayment(e.target.checked);
                      if (e.target.checked) setHoldPayment(false);
                    }}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor="instant-payment"
                    className="ml-3 text-sm text-gray-700"
                  >
                    <b>Instant Online Payment</b> – Secure your seat immediately
                    via credit/debit card or bank transfer.
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="provisional-confirmation"
                    checked={holdPayment && allProvisionalTCsChecked()}
                    disabled={instantPayment}
                    onClick={() => setShowProvisionalModal(true)}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1 cursor-pointer"
                  />
                  <label
                    htmlFor="provisional-confirmation"
                    className="ml-3 text-sm text-gray-700 cursor-pointer"
                    onClick={() => setShowProvisionalModal(true)}
                  >
                    <b>Provisional Confirmation (15-Day Hold)</b> – Click to
                    review Terms & Conditions.
                  </label>
                </div>
              </div>
            </div>

            {/* Provisional Terms & Conditions Modal */}
            {showProvisionalModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg max-w-xl w-full p-6 space-y-4 overflow-y-auto max-h-[80vh]">
                  <h3 className="text-xl font-semibold text-indigo-800">
                    Provisional Confirmation – Terms & Conditions
                  </h3>

                  {Object.keys(provisionalTCs).map((key, index) => (
                    <div key={index} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={provisionalTCs[key]}
                        onChange={(e) =>
                          setProvisionalTCs((prev) => {
                            const newState = {
                              ...prev,
                              [key]: e.target.checked,
                            };
                            // Auto-check provisional checkbox if all conditions met
                            if (Object.values(newState).every(Boolean))
                              setHoldPayment(true);
                            return newState;
                          })
                        }
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded mt-1"
                      />
                      <label className="ml-3 text-sm text-gray-700">
                        {key === "eligibility" &&
                          "Eligibility: The Provisional Confirmation option is designed for delegates who require internal or senior management approval prior to payment (e.g., airline, airport, or corporate representatives)."}
                        {key === "validityPeriod" &&
                          "Validity Period: Upon submission of a valid registration form, a provisional seat will be held for 15 calendar days from the date of confirmation by the IAMS 2026 Secretariat."}
                        {key === "paymentDeadline" &&
                          "Payment Deadline: Full payment must be received within 15 days of the provisional confirmation notice. Failure to make payment within this period will result in automatic cancellation of the provisional booking without prior notice."}
                        {key === "invoiceConfirmation" &&
                          "Invoice & Confirmation: An official invoice will be issued upon acceptance of the provisional registration. A final Confirmed Registration Letter will be issued only upon receipt of payment in full."}
                        {key === "seatAvailability" &&
                          "Seat Availability: The status of all provisional bookings remains ‘confirmed’ during the ‘Validity Period’."}
                      </label>
                    </div>
                  ))}

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setShowProvisionalModal(false)}
                      className="btn btn-indigo"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-8 p-6 border-2 border-dashed border-indigo-300 rounded-lg text-center bg-indigo-50">
              <h4 className="text-lg font-semibold text-black">
                <b>Payment Gateway Integration</b>
              </h4>
              <p className="text-sm text-black mt-2">
                Upon clicking <strong>'Submit & Pay'</strong>, you will be
                redirected to our secure payment gateway to complete the
                transaction.
              </p>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div
            className="flex justify-between pt-6 border-t border-gray-200"
            style={{ fontFamily: "Arsenal" }}
          >
            <button
              type="button"
              onClick={prevStep}
              id="prevBtn"
              className={`px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition ${
                currentStep === 0 ? "hidden" : ""
              }`}
            >
              &larr; Previous
            </button>

            <div
              className="ml-auto flex items-center gap-4"
              style={{ fontFamily: "Arsenal" }}
            >
              {currentStep < 3 && (
                <button
                  type="button"
                  id="nextBtn"
                  onClick={nextStep}
                  className="px-6 py-3 bg-[#15A4B3] text-white font-semibold rounded-lg shadow-md  transition"
                >
                  Next Step &rarr;
                </button>
              )}

              {currentStep === 3 && (
                <button
                  type="submit"
                  id="submitBtn"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#15A4B3] text-white font-semibold rounded-lg shadow-md  transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Pay"}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Confirmation */}
        {submittedSuccess && (
          <div
            id="confirmationMessage"
            className="p-8 text-center bg-green-50 rounded-b-xl"
            style={{ fontFamily: "Arsenal" }}
          >
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold text-green-700">
              Registration Successful!
            </h2>
            <p className="mt-2 text-gray-600">
              Your registration details have been secured. A confirmation email
              with your invoice and B2B Connect platform access will be sent
              shortly.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              We look forward to welcoming you to IAMS 2026 in New Delhi!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
