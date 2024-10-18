import Blits from '@lightningjs/blits'

export default Blits.Component('Home', {
  state() {
    return {
      selectedItem: 1,
    }
  },
  template: `
    <Element w="100%" h="100%">
      <Element w="300" h="300" :color="$selectedItem === 3 ? '#555000' : '#ff00ff'" />
      <Text size="50" color="#000000" :content="$selectedItem" />
    </Element>
  `,
  methods: {
    moveSelection(direction) {
      if (direction === 'right' && this.selectedItem < 3) {
        this.selectedItem += 1
      }

      if (direction === 'left' && this.selectedItem > 1) {
        this.selectedItem -= 1
      }
    },
  },
  hooks: {
    ready() {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          this.moveSelection('right')
        } else if (event.key === 'ArrowLeft') {
          this.moveSelection('left')
        }
      })
    },
  },
})
