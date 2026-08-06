// Shared contact fields appended to every service questionnaire.
export const CONTACT_FIELDS = [
  { name: "firstName", label: "First name", type: "text", required: true, placeholder: "Jane" },
  { name: "lastName", label: "Last name", type: "text", required: true, placeholder: "Doe" },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "jane@example.com" },
  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "(512) 555-0100" },
  {
    name: "preferredContact",
    label: "Preferred contact method",
    type: "select",
    required: true,
    options: ["Phone call", "Text message", "Email"],
  },
  {
    name: "bestTime",
    label: "Best time to reach you",
    type: "select",
    options: ["Morning", "Afternoon", "Evening", "Anytime"],
  },
  {
    name: "referralSource",
    label: "How did you hear about us?",
    type: "select",
    required: true,
    options: [
      "Friend or family referral",
      "Existing client referral",
      "Google or online search",
      "Social media",
      "Community or local event",
      "Other",
    ],
  },
];

// Per-service questionnaire definitions. Each service has a set of sections,
// each containing fields. Field types: text, email, tel, number, date, select,
// radio, checkbox-group, textarea. width "full" spans the two-column grid.
export const QUOTE_SERVICES = [
  {
    key: "auto",
    label: "Auto Insurance",
    blurb: "Tell us about your vehicles and driving history so we can shop the best rate.",
    sections: [
      {
        title: "Drivers & Vehicles",
        fields: [
          { name: "currentCarrier", label: "Current auto insurance carrier", type: "text", placeholder: "e.g. Geico, State Farm, or None" },
          { name: "policyExpiration", label: "Current policy expiration date", type: "date" },
          { name: "yearsWithCarrier", label: "Years with current carrier", type: "number", placeholder: "0" },
          { name: "numDrivers", label: "Number of drivers on the policy", type: "select", options: ["1", "2", "3", "4", "5+"] },
          { name: "numVehicles", label: "Number of vehicles to insure", type: "select", options: ["1", "2", "3", "4", "5+"] },
          { name: "primaryVehicle", label: "Primary vehicle (year / make / model)", type: "text", width: "full", placeholder: "2021 Toyota Camry" },
          { name: "annualMileage", label: "Estimated annual mileage", type: "number", placeholder: "12000" },
        ],
      },
      {
        title: "Coverage Preferences",
        fields: [
          { name: "coverageLevel", label: "Coverage level desired", type: "select", options: ["State minimum", "Standard liability", "Full coverage (comp & collision)", "Not sure"] },
          { name: "deductible", label: "Preferred comprehensive/collision deductible", type: "select", options: ["$250", "$500", "$1,000", "$2,500", "Not sure"] },
          { name: "ticketsAccidents", label: "Any tickets or accidents in the last 5 years?", type: "radio", options: ["No", "Yes — tickets only", "Yes — accidents only", "Yes — both"] },
          { name: "homeOwnership", label: "Do you own or rent your home?", type: "radio", options: ["Own", "Rent", "Other"] },
          { name: "bundleInterest", label: "Interested in bundling with home/renters?", type: "radio", options: ["Yes", "No", "Maybe"] },
        ],
      },
    ],
  },
  {
    key: "home",
    label: "Homeowners Insurance",
    blurb: "Share details about your property so we can build the right dwelling and liability coverage.",
    sections: [
      {
        title: "Property Details",
        fields: [
          { name: "propertyAddress", label: "Property street address", type: "text", width: "full", required: true, placeholder: "123 Main St, Austin, TX 78701" },
          { name: "propertyType", label: "Property type", type: "select", options: ["Single-family home", "Condo / townhome", "Manufactured / mobile", "Renters (contents)", "Other"] },
          { name: "yearBuilt", label: "Year built", type: "number", placeholder: "2005" },
          { name: "squareFeet", label: "Square footage", type: "number", placeholder: "2200" },
          { name: "roofAge", label: "Roof age (years) / condition", type: "text", placeholder: "5 yrs, good" },
          { name: "dwellingValue", label: "Estimated dwelling coverage needed ($)", type: "number", placeholder: "400000" },
        ],
      },
      {
        title: "Coverage Preferences",
        fields: [
          { name: "claimsHistory", label: "Any home claims in the last 5 years?", type: "radio", options: ["No", "Yes"] },
          { name: "securitySystem", label: "Do you have a monitored security system?", type: "radio", options: ["Yes", "No"] },
          { name: "currentCarrier", label: "Current homeowners carrier", type: "text", placeholder: "e.g. Allstate, or None" },
          { name: "bundleAuto", label: "Bundle with auto insurance?", type: "radio", options: ["Yes", "No", "Maybe"] },
          { name: "windHailDeductible", label: "Preferred wind/hail deductible", type: "select", options: ["1%", "2%", "Flat dollar amount", "Not sure"] },
        ],
      },
    ],
  },
  {
    key: "life",
    label: "Life Insurance",
    blurb: "A few questions about your health and goals to find the right coverage and rate.",
    sections: [
      {
        title: "Coverage Goals",
        fields: [
          { name: "coverageType", label: "Type of life insurance desired", type: "select", options: ["Term life", "Whole life", "Universal life", "Not sure — help me choose"] },
          { name: "coverageAmount", label: "Coverage amount desired", type: "select", options: ["$100,000", "$250,000", "$500,000", "$1,000,000", "$2,000,000+", "Not sure"] },
          { name: "termLength", label: "Preferred term length (if term)", type: "select", options: ["10 years", "15 years", "20 years", "30 years", "N/A"] },
          { name: "purpose", label: "Primary reason for coverage", type: "select", options: ["Income replacement", "Mortgage protection", "Final expenses", "Estate planning", "Business", "Other"] },
        ],
      },
      {
        title: "Health & Profile",
        fields: [
          { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
          { name: "height", label: "Height", type: "text", placeholder: "5'10\"" },
          { name: "weight", label: "Weight (lbs)", type: "number", placeholder: "180" },
          { name: "tobaccoUse", label: "Tobacco use in the last 12 months?", type: "radio", options: ["No", "Yes"] },
          { name: "healthRating", label: "Overall health (self-assessment)", type: "select", options: ["Excellent", "Good", "Fair", "Poor"] },
          { name: "occupation", label: "Occupation", type: "text", placeholder: "Software engineer" },
          { name: "annualIncome", label: "Annual income ($)", type: "number", placeholder: "75000" },
          { name: "currentLife", label: "Do you currently have life insurance?", type: "radio", options: ["No", "Yes"] },
        ],
      },
    ],
  },
  {
    key: "commercial",
    label: "Commercial Insurance",
    blurb: "Tell us about your business operations and the coverages you're exploring.",
    sections: [
      {
        title: "Business Profile",
        fields: [
          { name: "businessName", label: "Business name", type: "text", required: true, width: "full", placeholder: "Acme LLC" },
          { name: "industry", label: "Industry / business type", type: "text", width: "full", placeholder: "e.g. Restaurant, Consulting, Construction" },
          { name: "yearsInBusiness", label: "Years in business", type: "number", placeholder: "5" },
          { name: "numEmployees", label: "Number of employees", type: "number", placeholder: "12" },
          { name: "annualRevenue", label: "Annual gross revenue ($)", type: "number", placeholder: "500000" },
          { name: "businessAddress", label: "Business address", type: "text", width: "full", placeholder: "City, TX" },
        ],
      },
      {
        title: "Coverage Interests",
        fields: [
          {
            name: "coverageTypes",
            label: "Coverage types you're interested in",
            type: "checkbox-group",
            width: "full",
            options: ["General liability", "Commercial property", "Business Owner's Policy (BOP)", "Workers' comp / Occupational", "Commercial auto", "Professional liability (E&O)", "Cyber liability", "Commercial umbrella", "Other"],
          },
          { name: "payroll", label: "Estimated annual payroll ($)", type: "number", placeholder: "300000" },
          { name: "currentCarrier", label: "Current commercial carrier", type: "text", placeholder: "e.g. Hartford, or None" },
          { name: "claimsHistory", label: "Any business claims in the last 5 years?", type: "radio", options: ["No", "Yes"] },
        ],
      },
    ],
  },
  {
    key: "occupational",
    label: "Occupational Insurance",
    blurb: "An alternative to workers' comp — share your workforce details for a comparison.",
    sections: [
      {
        title: "Business Profile",
        fields: [
          { name: "businessName", label: "Business name", type: "text", required: true, width: "full", placeholder: "Acme Trucking LLC" },
          { name: "industry", label: "Industry / operation type", type: "text", width: "full", placeholder: "e.g. Trucking, Staffing, Light manufacturing" },
          { name: "numWorkers", label: "Number of workers to cover", type: "number", placeholder: "20" },
          { name: "driverClassification", label: "Are your workers 1099 or W-2?", type: "radio", options: ["1099 (owner-operators)", "W-2 (employees)", "Mixed"] },
          { name: "nonSubscriber", label: "Are you currently a Texas non-subscriber?", type: "radio", options: ["Yes", "No", "Not sure"] },
        ],
      },
      {
        title: "Current Coverage",
        fields: [
          { name: "currentCarrier", label: "Current occupational / workers' comp carrier", type: "text", placeholder: "e.g. Crum, or None" },
          { name: "currentPremium", label: "Current annual premium ($)", type: "number", placeholder: "25000" },
          { name: "medicalLimit", label: "Desired medical benefit limit", type: "select", options: ["$500,000", "$1,000,000", "$2,000,000", "Not sure"] },
          { name: "deductible", label: "Preferred deductible", type: "select", options: ["$0", "$250", "$500", "$1,000", "Not sure"] },
          { name: "employerLiability", label: "Include employer's liability coverage?", type: "radio", options: ["Yes", "No", "Not sure"] },
        ],
      },
    ],
  },
  {
    key: "ltc",
    label: "Long-Term Care Insurance",
    blurb: "A few questions about your health and care preferences to design the right LTC coverage.",
    sections: [
      {
        title: "About You",
        fields: [
          { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
          { name: "gender", label: "Gender", type: "select", options: ["Female", "Male", "Other / prefer not to say"] },
          { name: "maritalStatus", label: "Marital status", type: "select", options: ["Single", "Married", "Partnered", "Widowed", "Divorced"] },
          { name: "livingArrangement", label: "Living arrangement", type: "select", options: ["Live alone", "Live with spouse / partner", "Live with family", "Assisted living / facility"] },
          { name: "healthStatus", label: "Overall health (self-assessment)", type: "select", options: ["Excellent", "Good", "Fair", "Poor"] },
        ],
      },
      {
        title: "Care Preferences",
        fields: [
          { name: "targetCareSetting", label: "Where would you prefer to receive care?", type: "select", options: ["At home", "Assisted living", "Nursing / skilled facility", "Not sure"] },
          { name: "benefitPeriod", label: "Desired benefit period", type: "select", options: ["2 years", "3 years", "5 years", "Lifetime", "Not sure"] },
          { name: "dailyBenefit", label: "Desired daily benefit amount", type: "select", options: ["$100 / day", "$150 / day", "$200 / day", "$250 / day", "Not sure"] },
          { name: "inflationProtection", label: "Include inflation protection?", type: "radio", options: ["Yes", "No", "Not sure"] },
          { name: "currentLTC", label: "Do you currently have LTC coverage?", type: "radio", options: ["No", "Yes"] },
        ],
      },
      {
        title: "Assets & Goals",
        fields: [
          { name: "estimatedSavings", label: "Estimated retirement savings ($)", type: "number", placeholder: "250000" },
          { name: "planningStage", label: "Where are you in planning?", type: "select", options: ["Just exploring", "Planning ahead", "Urgent / near-term need"] },
        ],
      },
    ],
  },
  {
    key: "annuities",
    label: "Annuities",
    blurb: "Tell us about your goals and savings to explore guaranteed income and accumulation options.",
    sections: [
      {
        title: "About You",
        fields: [
          { name: "dateOfBirth", label: "Date of birth", type: "date", required: true },
          { name: "retirementStatus", label: "Retirement timeline", type: "select", options: ["Retired", "Within 5 years", "Within 10 years", "Within 15+ years", "Working / not yet planning"] },
        ],
      },
      {
        title: "Goals",
        fields: [
          { name: "annuityType", label: "Type of annuity you're considering", type: "select", options: ["Multi-Year Guaranteed Annuity (MYGA)", "Fixed indexed annuity", "Single premium immediate annuity", "Lifetime income annuity", "Not sure — help me choose"] },
          { name: "premiumAmount", label: "Estimated premium / amount to allocate ($)", type: "number", placeholder: "100000" },
          { name: "desiredTerm", label: "Preferred guarantee term (if MYGA)", type: "select", options: ["3 years", "5 years", "7 years", "10 years", "Not sure"] },
          { name: "incomeGoal", label: "Primary goal", type: "select", options: ["Growth / accumulation", "Lifetime income", "Bridge income to retirement", "Legacy / transfer", "Not sure"] },
        ],
      },
      {
        title: "Funding",
        fields: [
          { name: "fundingSource", label: "Planned funding source", type: "select", options: ["Cash", "401(k) / IRA rollover", "Bank / CD", "Sale of property", "Other"] },
          { name: "riskTolerance", label: "Risk tolerance", type: "select", options: ["Conservative (guaranteed)", "Moderate", "Growth-oriented"] },
        ],
      },
    ],
  },
];

export const getServiceByKey = (key) =>
  QUOTE_SERVICES.find((s) => s.key === key) || null;