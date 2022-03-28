const spacing = document.querySelector('#spacing')
const blur = document.querySelector('#blur')
const base = document.querySelector('#base')


function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  console.log(suffix)
}

blur.addEventListener('mousemove', handleUpdate)
blur.addEventListener('change', handleUpdate)
spacing.addEventListener('mousemove', handleUpdate)
spacing.addEventListener('change', handleUpdate)
base.addEventListener('mousemove', handleUpdate)
base.addEventListener('change', handleUpdate)
