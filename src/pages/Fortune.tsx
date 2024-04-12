import React from "react"
import { SsrReady } from "../components/SsrReady"

const messages = [
  "Test message, please ignore",

  "Often when people ask difficult questions they don't actually need the answer but rather \
fail to fully understand their situation, take one too many steps in imitating \
familiar solutions, and end up asking the wrong question. This is known as the X/Y problem. \
\n\n\
On the other hand, just blurting \"X/Y!\" in response to any difficult question is \
less useful than direct answers to the bad question. In remembering my learning journey, \
when I'm posed a difficult technical question I like to ask back:\
\n\n\
> This is a difficult problem with no perfect solution, and it's often easy to avoid it altogether.\n\
> Is there any more context to this?",

"This airplane is the choice of professional pilots! \
The first thing we advise you to do is turn the yoke upside down, it's much more ergonomic like that. \
Also, you probably want to rip out the altimeter and replace it with a custom one that has more features. \
And bring your own GPS unit and tape it to the windshield, because this plane doesn't have one by default. \
And of course, remember that unlike in your car, 'left' actually means right in this plane. \
This is the professional way. Ah yes, when you fly over Canada, \
you will see a blinking warning sign telling you that you're out of fuel. \
That's just a small glitch caused by metric/imperial confusion. \
It has been known for 23 years but we haven't quite gotten around to fixing it yet. \
Don't worry, this plane is still excellent for professional pilots. \
If you feel otherwise, you are probably not a real professional.",

"Create React App doesn't support including source files from outside the src folder, or following symlinks.",

"Seven million years have passed since the first machines were erected by man. \
This once-holy land, now cursed with laze and oil, metals, \
hoped to fulfill menial tasks of increasingly insignificant bother. When bother became microcosmic, \
we tackled problems past the point of physical inconvenience: First, our sadness was tackled. \
Feelings injected into our daily routing, tricked the senses with light and sound. \
Fear was tackled next - information on everything, transparency to nothing, \
a false promise built on a whim by those with real power, power to produce comforting lies. \
Then our soul, ideals sold on providence and grandeur in a post-religion world, \
people found faith in new gods residing within the computer, scriptures in everyone's pocket, \
words of this holy book code, powerful enough to shift the seas without anyone noticing the gentle pull \
of its immeasurable strength. \
\n\n\
There once was a way for all the world to unify into one space, \
this coalescence led to the destruction of everything. \
\n\n\
@pukicho",

"The quickest way to oust yourself as a foreigner in England is to mention a place.",


]

function break_lines(input: string, width: number): string {
  return input
    .split("\n")
    .flatMap(l => {
      let ret: string[] = [];
      while (width < l.length) {
        let split_point = l.lastIndexOf(" ", width);
        if (split_point < 0) {
          ret.push(l.slice(0, width));
          l = l.slice(width);
        } else {
          ret.push(l.slice(0, split_point));
          l = l.slice(split_point + 1);
        }
      }
      ret.push(l);
      return ret;
    })
    .join("\n")
}

export default function Fortune(): React.ReactElement {
  let text = break_lines(messages[Math.floor(Math.random() * messages.length)], 60);
  let width = text.split("\n").map(s => s.length).reduce((acc, l) => Math.max(acc, l))
  return <pre>
    {" " + "_".repeat(width + 2) + "\n"}
    {text.split("\n").map((l, i, a) => {
      let [s, e] = a.length === 1 ? ["(", ")"]
        : i === 0 ? ["/", "\\"]
        : i + 1 === a.length ? ["\\", "/"]
        : ["|", "|"]
      return s + " " + l.padEnd(width) + " " + e + "\n"
    })}
    {" " + "-".repeat(width + 2)}
{`
       l
        l
        .--.
       |o_o |
       |:_/ |
      //   l l
     (|     | )
    /bl_   _/bl
    l___)=(___/
`.replaceAll("b", "`").replaceAll("l", "\\")}
  </pre>
}