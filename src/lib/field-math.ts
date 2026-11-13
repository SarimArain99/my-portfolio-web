// Splits a field text into the lines the particle field draws.
// The hero name stays on one line: stacking it on two lines made the
// letters too small to read on phones, so the camera pulls back until
// the one line fits instead. Words inside the line keep the half-em
// gap the field draws between them.
export function wordLines(text: string): string[] {
  const clean = text.trim();
  return clean ? [clean] : [];
}
