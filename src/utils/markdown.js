import MarkdownIt from "markdown-it";

// AI responses are untrusted: escape raw HTML and keep the default URL checks.
const markdown = new MarkdownIt({ html: false, breaks: true });

// Some models put spaces inside strong markers. Handle this as inline syntax
// so fenced code, inline code, and escaped markers retain their literal text.
markdown.inline.ruler.before("emphasis", "spaced_strong", (state, silent) => {
  const match = /^\*\*([^\n]+?)\*\*/.exec(state.src.slice(state.pos, state.posMax));
  if (!match || !match[1].trim() || match[1] === match[1].trim()) return false;

  if (!silent) {
    state.push("strong_open", "strong", 1);
    const tokens = [];
    state.md.inline.parse(match[1].trim(), state.md, state.env, tokens);
    state.tokens.push(...tokens);
    state.push("strong_close", "strong", -1);
  }
  state.pos += match[0].length;
  return true;
});

export function renderMarkdown(text) {
  return markdown.render(text);
}
