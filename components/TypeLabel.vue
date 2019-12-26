<template>
  <div class="text-left">
    <pre id="typewriter">
<span class="var-highlight">var</span> object = {
    name: <span class="string-highlight">'Petousis Menelaos'</span>,
    type: <span class="string-highlight">'Front End Dev / Freelancer'</span>,
    location: <span class="string-highlight">'Athens, Greece'</span>,
    properties:[<span class="string-highlight">'Javascript'</span>,
                <span class="string-highlight">'HTML5'</span>,
                <span class="string-highlight">'SCSS'</span>];
    };<br>
</pre>
  </div>
</template>

<script>
export default {
  name: 'TypeLabel',
  mounted() {
    const typer = document.getElementById('typewriter')
    const typewriter = this.setupTypewriter(typer)
    typewriter.type()
  },
  methods: {
    setupTypewriter(t) {
      const HTML = t.innerHTML

      t.innerHTML = ''

      let cursorPosition = 0
      let tag = ''
      let writingTag = false
      let tagOpen = false
      const typeSpeed = 100
      let tempTypeSpeed = 0

      const type = function() {
        if (writingTag === true) {
          tag += HTML[cursorPosition]
        }

        if (HTML[cursorPosition] === '<') {
          tempTypeSpeed = 0
          if (tagOpen) {
            tagOpen = false
            writingTag = true
          } else {
            tag = ''
            tagOpen = true
            writingTag = true
            tag += HTML[cursorPosition]
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition]
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === ' ') {
            tempTypeSpeed = 0
          } else {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50
          }
          t.innerHTML += HTML[cursorPosition]
        }
        if (writingTag === true && HTML[cursorPosition] === '>') {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50
          writingTag = false
          if (tagOpen) {
            const newSpan = document.createElement('span')
            t.appendChild(newSpan)
            newSpan.innerHTML = tag
            tag = newSpan.firstChild
          }
        }

        cursorPosition += 1
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed)
        }
      }

      return {
        type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.var-highlight{
    color: #C0AD60;
}

.string-highlight {
    color: $main-color;
}

#typewriter {
    font-size: 2em;
    margin: 0;
    padding-left: 7%;
    // display: table;
    // margin: 0 auto;

    &:after{
        content: "|";
        animation: blink 200ms linear infinite alternate;
    }
}

@-webkit-keyframes blink {
    0%{opacity: 0;}
    100%{opacity: 1;}
}

@-moz-keyframes blink {
    0%{opacity: 0;}
    100%{opacity: 1;}
}

@keyframes blink {
    0%{opacity: 0;}
    100%{opacity: 1;}
}

@media screen and (max-width: 767px) {
    #typewriter {
        font-size: 1em;
        padding-left: 2%;
    }
}
</style>
