<form id="feedback-form" class="mt-8 text-left">
  <div class="grid sm:grid-cols-2 gap-4">
    <div>
      <label for="feedback-name" class="block text-sm font-medium mb-2">Your name</label>
      <input id="feedback-name" name="Name" type="text" required
        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-400"
        placeholder="Your name">
    </div>

    <div>
      <label for="feedback-email" class="block text-sm font-medium mb-2">Your email</label>
      <input id="feedback-email" name="Email" type="email" required
        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-400"
        placeholder="you@example.com">
    </div>
  </div>

  <div class="mt-4">
    <label for="feedback-message" class="block text-sm font-medium mb-2">Feedback / message</label>
    <textarea id="feedback-message" name="Message" rows="5" required
      class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-400"
      placeholder="Write your feedback here..."></textarea>
  </div>

  <button id="feedback-submit" type="submit"
    class="mt-5 inline-flex items-center justify-center rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 disabled:opacity-60">
    Send feedback ↗
  </button>

  <p id="feedback-status" class="mt-4 text-sm"></p>
</form>
