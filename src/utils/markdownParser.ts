export const parseMarkdownToHtml = (markdown: string) => {
  if (!markdown) return '';

  return markdown
    // Header 1
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Header 2
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    // Header 3
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Paragraphs
    .replace(/^(?!\s*$)(.+)$/gim, '<p>$1</p>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    // Code inline
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Unordered lists
    .replace(/^\s*[-*+]\s(.*)$/gim, '<li>$1</li>')
    // Remove extra line breaks
    .trim();
};

// Fungsi tambahan untuk validasi sederhana
export const isValidMarkdown = (markdown: string): boolean => {
  return !!markdown && markdown.trim().length > 0;
};