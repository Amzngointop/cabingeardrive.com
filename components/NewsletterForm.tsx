'use client';

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-2.5 rounded text-[14px] text-ink"
      />
      <button
        type="submit"
        className="bg-accent text-white text-[13px] font-semibold uppercase tracking-wider px-6 py-2.5 rounded hover:bg-accent-hover"
      >
        Subscribe
      </button>
    </form>
  );
}
