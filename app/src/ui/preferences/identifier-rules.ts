// Git forbids names consisting entirely of these characters
// (what Git calls crud) but as long as there's at least one
// valid character in the name it'll strip the crud and be happy.
// See https://github.com/git/git/blob/e629a7d28a405e/ident.c#L191-L203
const crudCharactersRe = /^[\x00-\x20.,:;<>"\\']+$/

export function gitAuthorNameIsValid(name: string): string | null {
  if (crudCharactersRe.test(name)) {
    return name
  }

  return null
}
