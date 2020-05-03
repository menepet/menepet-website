<template>
  <div class="text-left">
    <pre id="typewriter" @click="goToAbout">
<span class="var-highlight">const</span> menePet = {
      name: <span class="string-highlight">'Petousis Menelaos'</span>,
      type: <span class="string-highlight">'Front-End Freelancer'</span>,
      location: <span class="string-highlight">'Athens, Greece'</span>,
      prop: [<span class="string-highlight">'Javascript &#x214B; VueJs</span>,
             <span class="string-highlight">'HTML5'</span>,
             <span class="string-highlight">'SCSS'</span>];
};
<span class="comment">// After initialization, click </span><span class="link">here</span>
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
    goToAbout() {
      this.$router.push('/about')
    },
    setupTypewriter(t) {
      const HTML = t.innerHTML

      t.innerHTML = ''

      let cursorPosition = 0
      let tag = ''
      let writingTag = false
      let tagOpen = false
      const typeSpeed = 50
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

.comment {
    color: #67994a;
    font-style: italic;
}

.link {
    @extend .comment;
    cursor: pointer;
    color: #67994a;
    border-bottom: #67994a 1px dotted;
    &:hover {
      text-decoration: none;
    }
}

#typewriter {
    font-size: 1.9em;
    margin: 0 auto;
    width: 770px;
    height: 450px;
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

@media screen and (max-width: 1000px) {
    #typewriter {
        font-size: 1.4em;
        width: 550px;
        height: 350px;
    }
}

@media screen and (max-width: 767px) {
    #typewriter {
        font-size: 1em;
        width: 350px;
        width: 98vw;
        margin-left: 2vw;
        height: 250px;
    }
}
</style>
