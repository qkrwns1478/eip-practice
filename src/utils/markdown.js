import MarkdownIt from 'markdown-it';

// AI responses are untrusted: escape raw HTML and keep the default URL checks.
const markdown = new MarkdownIt({ html: false, breaks: true });

export function renderMarkdown(text) {
  return markdown.render(text);
}
