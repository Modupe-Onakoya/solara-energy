"use client"
import { useState } from "react"
import Link from "next/link"
import { z } from "zod"

const steps = ["Personal Info", "Experience", "Location", "Submit"]

// one schema per step
const personalSchema = z.object({
    firstName: z.string().trim().min(2, "First name is too short"),
    lastName: z.string().trim().min(2, "Last name is too short"),
    phone: z.string().trim().regex(/^(\+234|0)[789][01]\d{8}$/, "Enter a valid Nigerian phone number"),
    email: z.string().trim().email("Enter a valid email"),
})

const experienceSchema = z.object({
    profession: z.string().min(1, "Select a profession"),
    years: z.string().min(1, "Select years of experience"),
    solarExp: z.enum(["Yes", "No"], { message: "Select Yes or No" }),
    about: z.string().max(500, "Maximum 500 characters"),
})

const locationSchema = z.object({
    state: z.string().min(1, "Select a state"),
    city: z.string().trim().min(2, "Enter your city or LGA"),
    travel: z.string().min(1, "Select how far you can travel"),
})

const finalSchema = z.object({
    agreed: z.literal(true, { message: "You must accept the terms" }),
})

const stepSchemas = [personalSchema, experienceSchema, locationSchema, finalSchema]

type FormData = {
    firstName: string
    lastName: string
    phone: string
    email: string
    profession: string
    years: string
    solarExp: string
    about: string
    state: string
    city: string
    travel: string
    agreed: boolean
}

const initialData: FormData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    profession: "Electrician",
    years: "Less than 1 year",
    solarExp: "",
    about: "",
    state: "",
    city: "",
    travel: "Within my city only",
    agreed: false,
}

type Errors = Partial<Record<keyof FormData, string>>

const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-400 transition-colors"
const labelClass = "text-slate-600 text-xs font-semibold block mb-1.5"

function FieldError({ message }: { message?: string }) {
    if (!message) return null
    return <p className="text-red-500 text-xs mt-1">{message}</p>
}

export default function ApplyInstallerPage() {
    const [step, setStep] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [data, setData] = useState<FormData>(initialData)
    const [errors, setErrors] = useState<Errors>({})

    function update<K extends keyof FormData>(key: K, value: FormData[K]) {
        setData((prev) => ({ ...prev, [key]: value }))
        // clear that field's error as the user fixes it
        setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const result = stepSchemas[step].safeParse(data)

        if (!result.success) {
            const fieldErrors: Errors = {}
            result.error.issues.forEach((issue) => {
                const key = issue.path[0] as keyof FormData
                if (!fieldErrors[key]) fieldErrors[key] = issue.message
            })
            setErrors(fieldErrors)
            return
        }

        setErrors({})

        if (step < steps.length - 1) {
            setStep((s) => s + 1)
        } else {
            // all steps valid, send `data` to your route handler / Supabase here
            console.log(data)
            setSubmitted(true)
        }
    }

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-16 bg-white">
                <div className="text-center max-w-md px-6 space-y-5">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M8 18l7 7 13-13" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <h2 className="text-slate-900 font-bold text-3xl">Application Received!</h2>
                    <p className="text-slate-500 text-base leading-relaxed">Thank you for applying to become a SolarFlow installer. Our team will review your application and reach out within 2–3 business days to schedule your onboarding interview.</p>
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white pt-16">
            <div className="max-w-2xl mx-auto px-6 py-14">
                <Link href="/becomeInstaller" className="inline-flex items-center gap-2 text-slate-400 text-sm mb-8 hover:text-slate-700 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 7H4M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Back to Installers
                </Link>

                <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Join Our Network</p>
                <h1 className="text-slate-900 font-bold text-4xl mb-2">Become a SolarFlow Installer</h1>
                <p className="text-slate-500 text-base mb-8">Complete the form below and our team will contact you within 48 hours.</p>

                {/* Progress */}
                <div className="flex items-center gap-0 mb-10">
                    {steps.map((s, i) => (
                        <div key={s} className="flex items-center flex-1 last:flex-none">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${i < step ? "bg-green-500 text-white" : i === step ? "text-white" : "bg-slate-100 text-slate-400"}`} style={i === step ? { backgroundColor: "#F97316" } : {}}>
                                {i < step ? "✓" : i + 1}
                            </div>
                            <p className={`ml-2 text-xs font-medium whitespace-nowrap ${i === step ? "text-slate-800" : "text-slate-400"}`}>{s}</p>
                            {i < steps.length - 1 && <div className={`flex-1 h-px mx-3 ${i < step ? "bg-green-400" : "bg-slate-200"}`} />}
                        </div>
                    ))}
                </div>

                {/* noValidate turns off the browser's own popups so Zod handles everything */}
                <form className="space-y-5" noValidate onSubmit={handleSubmit}>
                    {step === 0 && (
                        <>
                            <h3 className="text-slate-800 font-bold text-lg">Personal Information</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>First Name *</label>
                                    <input type="text" placeholder="Emeka" className={inputClass} value={data.firstName} onChange={(e) => update("firstName", e.target.value)} />
                                    <FieldError message={errors.firstName} />
                                </div>
                                <div>
                                    <label className={labelClass}>Last Name *</label>
                                    <input type="text" placeholder="Nwosu" className={inputClass} value={data.lastName} onChange={(e) => update("lastName", e.target.value)} />
                                    <FieldError message={errors.lastName} />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Phone Number *</label>
                                <input type="tel" placeholder="08012345678" className={inputClass} value={data.phone} onChange={(e) => update("phone", e.target.value)} />
                                <FieldError message={errors.phone} />
                            </div>
                            <div>
                                <label className={labelClass}>Email Address *</label>
                                <input type="email" placeholder="emeka@email.com" className={inputClass} value={data.email} onChange={(e) => update("email", e.target.value)} />
                                <FieldError message={errors.email} />
                            </div>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <h3 className="text-slate-800 font-bold text-lg">Your Experience</h3>
                            <div>
                                <label className={labelClass}>Current Profession</label>
                                <select className={`${inputClass} bg-white`} value={data.profession} onChange={(e) => update("profession", e.target.value)}>
                                    <option>Electrician</option><option>Solar Technician</option><option>Engineer</option><option>Plumber</option><option>Other</option>
                                </select>
                                <FieldError message={errors.profession} />
                            </div>
                            <div>
                                <label className={labelClass}>Years of Experience</label>
                                <select className={`${inputClass} bg-white`} value={data.years} onChange={(e) => update("years", e.target.value)}>
                                    <option>Less than 1 year</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option>
                                </select>
                                <FieldError message={errors.years} />
                            </div>
                            <div>
                                <label className={labelClass}>Have you installed solar before? *</label>
                                <div className="flex gap-4">
                                    {["Yes", "No"].map((v) => (
                                        <label key={v} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="solar_exp" value={v} checked={data.solarExp === v} onChange={(e) => update("solarExp", e.target.value)} className="accent-orange-500" />
                                            <span className="text-sm text-slate-700">{v}</span>
                                        </label>
                                    ))}
                                </div>
                                <FieldError message={errors.solarExp} />
                            </div>
                            <div>
                                <label className={labelClass}>Tell us about yourself</label>
                                <textarea rows={3} placeholder="Brief background, certifications, previous projects..." className={`${inputClass} resize-none placeholder-slate-400`} value={data.about} onChange={(e) => update("about", e.target.value)} />
                                <FieldError message={errors.about} />
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3 className="text-slate-800 font-bold text-lg">Your Location</h3>
                            <div>
                                <label className={labelClass}>State *</label>
                                <select className={`${inputClass} bg-white`} value={data.state} onChange={(e) => update("state", e.target.value)}>
                                    <option value="">Select state</option>
                                    {["Lagos", "Abuja (FCT)", "Rivers", "Kano", "Oyo", "Anambra", "Edo", "Imo", "Kaduna", "Delta"].map((s) => <option key={s}>{s}</option>)}
                                </select>
                                <FieldError message={errors.state} />
                            </div>
                            <div>
                                <label className={labelClass}>City / LGA *</label>
                                <input type="text" placeholder="e.g. Lekki, Lagos Island, Ikeja..." className={inputClass} value={data.city} onChange={(e) => update("city", e.target.value)} />
                                <FieldError message={errors.city} />
                            </div>
                            <div>
                                <label className={labelClass}>How far are you willing to travel for jobs?</label>
                                <select className={`${inputClass} bg-white`} value={data.travel} onChange={(e) => update("travel", e.target.value)}>
                                    <option>Within my city only</option><option>Up to 50km</option><option>Up to 100km</option><option>Anywhere in my state</option><option>Nationwide</option>
                                </select>
                                <FieldError message={errors.travel} />
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h3 className="text-slate-800 font-bold text-lg">Final Review</h3>
                            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 space-y-2">
                                {["Application details saved", "We'll call within 48 hours", "Free training included if selected", "No fees to join the network"].map((b) => (
                                    <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#FFF7ED" /><path d="M4.5 7l2 2 3-3" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {b}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" checked={data.agreed} onChange={(e) => update("agreed", e.target.checked)} className="mt-0.5 accent-orange-500" />
                                    <span className="text-sm text-slate-500">I confirm that all information provided is accurate and I agree to SolarFlow's installer terms and conditions.</span>
                                </label>
                                <FieldError message={errors.agreed} />
                            </div>
                        </>
                    )}

                    <div className="flex items-center justify-between pt-4">
                        {step > 0 ? (
                            <button type="button" onClick={() => { setErrors({}); setStep((s) => s - 1) }} className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all">← Back</button>
                        ) : <div />}
                        <button type="submit" className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110" style={{ backgroundColor: "#F97316" }}>
                            {step < steps.length - 1 ? "Continue →" : "Submit Application"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}