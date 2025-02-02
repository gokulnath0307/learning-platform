export const ContentItem = ({ translation, word, tanlish }) => (
  <div className="flex max-w-full px-6 space-x-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
      <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
        <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
      </svg>
    </div>
    <div>
      <h6 className="mb-2 text-xl font-bold capitalize">{translation ?? word}</h6>
      {translation ? (
        <p className="text-sm text-gray-900">
          {word} <span className={`mb-2 text-base ${word?'font-bold':''} capitalize`}>[{tanlish}]</span>
        </p>
      ) : null}
    </div>
  </div>
);
