module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        mac: "url('./Assets/mac.jpg')",
        macDark: "url('./Assets/mac.webp')",
        lightBg: "linear-gradient(to right bottom, #AE3263 30%, #445282 70%);",
        cc: "url('https://images.unsplash.com/photo-1620030509984-faa945a53060?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')",
        cc2: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
        cc3: "url('https://images.unsplash.com/photo-1620027923592-5f3cd7d30e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')",
        cc4: "url('https://images.unsplash.com/photo-1620203178232-3619475228a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80')",
        dashed:
          "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='3' ry='3' stroke='%23333' stroke-width='2' stroke-dasharray='25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
        light1: "url('https://i.pinimg.com/564x/cf/e3/8d/cfe38d2d6817aa4c28856387feb4369b.jpg')",
        light2: "url('https://i.pinimg.com/564x/25/7d/df/257ddf9575c61ebca115d0946c22f56b.jpg')",
        light3: "url('https://i.imgur.com/wH3Oo0x.jpeg')",
        dark1: "url('https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34175/Nature-Sunset-Simple-Minimal-Illustration-Art-Red-iphone-8-wallpaper-ilikewallpaper_com.jpg')",
        dark2: "url('https://external-preview.redd.it/8tiSTUckqDAimWustbL2MnYs2iOWK5i4kO3Lt8BxzJ8.png?auto=webp&s=351dc16aa83c5073fa0b011ce906be5e5575d5e6')",
        dark3: "url('https://i.pinimg.com/750x/7e/24/7b/7e247bac0e38fce4476a0bfbf24ebe2f.jpg')"
      },
      width: {
        99: "calc(100% - 16rem);",
      },
      fontFamily: {
        kredit: "Inconsolata, monospace",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
