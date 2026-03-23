"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function RSVPSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    meal: "standard",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "white" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-4">
            You&apos;re Invited
          </p>
          <h2
            className="font-playfair italic mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#2c2c2c" }}
          >
            RSVP
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto mb-6">
            <span className="font-cormorant text-amber-500 text-xl">♥</span>
          </div>
          <p className="font-cormorant text-gray-500 text-lg">
            Please respond by <strong className="text-amber-700">August 1, 2026</strong>
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: "1px solid rgba(201,168,76,0.2)" }}
        >
          {/* Gold header */}
          <div
            className="h-2"
            style={{ background: "linear-gradient(to right, #c9a84c, #e8c97a, #9a6f2d)" }}
          />

          <div className="bg-white p-8 md:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="text-3xl text-white">♥</span>
                  </motion.div>
                  <h3 className="font-playfair italic text-2xl text-gray-800 mb-3">
                    {attending === "no" ? "We'll Miss You" : "See You There!"}
                  </h3>
                  <p className="font-cormorant text-gray-500 text-lg">
                    {attending === "no"
                      ? "Thank you for letting us know. We'll be thinking of you on our special day."
                      : "We can't wait to celebrate with you! A confirmation has been sent to your email."}
                  </p>
                  {attending !== "no" && (
                    <div
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      <span className="text-amber-600">📅</span>
                      <span className="font-montserrat text-xs text-amber-700 tracking-wide">September 21, 2026</span>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Attendance toggle */}
                  <div>
                    <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-3">
                      Will you attend?
                    </label>
                    <div className="flex gap-3">
                      {(["yes", "no"] as const).map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setAttending(val)}
                          className="flex-1 py-3 rounded-lg font-montserrat text-sm tracking-wide transition-all duration-300"
                          style={{
                            background: attending === val
                              ? val === "yes"
                                ? "linear-gradient(135deg, #c9a84c, #e8c97a)"
                                : "#666"
                              : "transparent",
                            color: attending === val ? "white" : "#666",
                            border: attending === val ? "none" : "1px solid #e0e0e0",
                          }}
                        >
                          {val === "yes" ? "✓ Joyfully Accept" : "✗ Regretfully Decline"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="wedding-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="wedding-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-6 overflow-hidden"
                    >
                      {/* Number of guests */}
                      <div>
                        <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-2">
                          Number of Guests
                        </label>
                        <select
                          className="wedding-input"
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        >
                          {[1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                          ))}
                        </select>
                      </div>

                      {/* Meal preference */}
                      <div>
                        <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-2">
                          Meal Preference
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { val: "standard", label: "Standard", icon: "🍽️" },
                            { val: "vegetarian", label: "Vegetarian", icon: "🥗" },
                            { val: "vegan", label: "Vegan", icon: "🌱" },
                          ].map((opt) => (
                            <button
                              key={opt.val}
                              type="button"
                              onClick={() => setForm({ ...form, meal: opt.val })}
                              className="p-3 rounded-lg text-center transition-all duration-200"
                              style={{
                                background: form.meal === opt.val ? "rgba(201,168,76,0.1)" : "transparent",
                                border: `1px solid ${form.meal === opt.val ? "#c9a84c" : "#e0e0e0"}`,
                              }}
                            >
                              <div className="text-xl mb-1">{opt.icon}</div>
                              <div className="font-montserrat text-xs text-gray-600">{opt.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="font-montserrat text-xs tracking-widest uppercase text-gray-500 block mb-2">
                      Wishes for the Couple
                    </label>
                    <textarea
                      className="wedding-input resize-none"
                      rows={3}
                      placeholder="Share your wishes, love, and joy..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="btn-gold w-full text-sm"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={!attending}
                    style={{ opacity: attending ? 1 : 0.5 }}
                  >
                    {attending === "no" ? "Send Your Decline" : "Confirm Attendance"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dress code note */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-cormorant text-gray-400 text-base">
            Dress Code: <span className="text-amber-600 italic">Black Tie Optional</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
