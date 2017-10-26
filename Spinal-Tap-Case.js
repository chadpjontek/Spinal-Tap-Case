function spinalCase(str) {
  // Find all underscores, spaces, and capital letters that come after lowercase and replace them with dashes.
  var re = /([a-z]+[A-Z])|([_])|([ ])/g;
  str = str.replace(re, replacer);
  str = str.toLowerCase();
  return str;
}
function replacer(match, p1, p2, p3) {
  switch (match) {
    case p1:
      p1 = p1.split("");
      p1.splice(p1.length - 1, 0, '-');
      p1 = p1.join('');
      return p1;
    case p2:
    case p3:
      return "-";
    default:
      return match;
  }
}
// Examples
spinalCase("This Is Spinal Tap"); // returns "this-is-spinal-tap"
spinalCase("thisIsSpinalTap"); // returns "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // returns "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh"); // returns "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things"); // returns "all-the-small-things"