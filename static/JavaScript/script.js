


const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  // Disable the storage manager for the moment
  storageManager: false,
  layerManager: {
      appendTo: '.layers-container'
    },
    traitManager: {
      appendTo: '.traits-container',
    },
    deviceManager: {
      devices: [{
          name: 'Desktop',
          width: '', // default size
        }, {
          name: 'Mobile',
          width: '320px', // this value will be used on canvas width
          widthMedia: '480px', // this value will be used in CSS @media
      }]
    },
  // Avoid any default panel
  panels: {
    defaults: [
      // ...
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
        }],
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [{
            id: 'device-desktop',
            label: 'D',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          }, {
            id: 'device-mobile',
            label: 'M',
            command: 'set-device-mobile',
            togglable: false,
        }],
      }
    ]
  },
  selectorManager: {
    appendTo: '.styles-container'
  },
  styleManager: {
    appendTo: '#stylemanager',
    sectors: [{
        name: 'Dimension',
        open: false,
        // Use built-in properties
        buildProps: ['width', 'min-height', 'padding'],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: 'integer',
            name: 'The width', // Label for the property
            property: 'width', // CSS property (if buildProps contains it will be extended)
            units: ['px', '%'], // Units, available only for 'integer' types
            defaults: 'auto', // Default value
            min: 0, // Min value, available only for 'integer' types
          }
        ]
      },{
        name: 'Extra',
        open: false,
        buildProps: ['background-color', 'box-shadow', 'custom-prop'],
        properties: [
          {
            id: 'custom-prop',
            name: 'Custom Label',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: '12px', name: 'Tiny' },
              { value: '18px', name: 'Medium' },
              { value: '32px', name: 'Big' },
            ],
         }
        ]
      }]
  },
  blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section', // id is mandatory
          label: '<b>Section</b>', // You can use HTML/SVG inside labels
          attributes: { class:'gjs-block-section' },
          content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
        }, {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        }, {
          id: 'image',
          label: 'Image',
          // Select the component once it's dropped
          select: true,
          // You can pass components as a JSON instead of a simple HTML string,
          // in this case we also use a defined component type `image`
          content: { type: 'image' },
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        },
        {
          id:'protfolio-1',
          label: 'protfolio-1',
          attributes:{class:''},
          content :`<!-- component -->
          <!-- Creaet Blog Portfolio By Joker Banny -->
          <header class="max-h-full bg-white p-6 grid">
            <!-- Navbar Menu -->
            <nav class="w-full grid justify-end">
              <ul class="hidden md:flex space-x-8 font-bold text-gray-700">
                <li><a href="#">Works</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <div class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </nav>
          
            <!-- Section Hero  -->
            <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
              <div class="grid justify-center items-center order-1 col-span-1">
                <img class="lg:h-80 md:h-64 h-40 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="" />
              </div>
              <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
                <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am John, Creative Technologist</h1>
                <p class="text-xl text-gray-800 text-center md:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
              </div>
            </div>
          </header>
          
          <!-- Main -->
          <div class="md:gap-4 p-6 bg-blue-50 md:grid">
            <div class="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
              <h1 class="justify-start md:text-left text-2xl">Recent posts</h1>
              <p class="hidden md:block text-right text-2xl">View all</p>
            </div>
            <div class="md:grid grid-cols-2 gap-6 lg:px-40">
              <div>
                <div class="bg-white p-4">
                  <div>
                    <div class="mb-4">
                      <h1 class="text-2xl font-bold text-gray-700">Making a design system from scratch</h1>
                    </div>
          
                    <div class="">
                      <span class="block mb-4 text-xl">12 Feb 20 20 | Design, Pattern</span>
                      <p class="text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                  </div>
                </div>
              </div>
          
              <div class="bg-white p-4 md:mt-0 mt-6">
                <div>
                  <div class="mb-4">
                    <h1 class="text-2xl font-bold text-gray-700">Creating pixel perfect icons in Figma</h1>
                    <p class="hidden">View all</p>
                  </div>
          
                  <div class="">
                    <span class="block mb-4 text-xl">12 Feb 20 20 | Design, Pattern</span>
                    <p class="text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="mt-6 p-4 bg-white px-6">
              <div class="border-b pb-6">
                <h1 class="mt-2 mb-6 text-center text-xl">Featured works</h1>
                <div class="md:grid grid-cols-2 gap-6">
                  <div>
                    <img class="md:h-full object-cover" src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9" alt="" />
                  </div>
                  <div>
                    <h1 class="my-6 text-2xl font-bold text-gray-700">Designing Dashboards</h1>
                    <span class="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">2020</span>
                    <spnan class="text-lg">Dashboard</spnan>
                    <p class="mt-6 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="bg-white">
            <div class="flex mt-20 px-10 items-center justify-around max-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 textgray-800e w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <p class="text-center my-10 text-lg">Copyright ©2020 All rights reserved</p>
          </footer>`
      
        }
      ],
    },
    canvas :{
      style:[
    
      ], 
      scripts:[
        'https://cdn.tailwindcss.com'
      ]
    }
});
editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});
editor.Panels.addPanel({
id: 'basic-actions',
el: '.panel__basic-actions',
buttons: [
  {
  id: 'visibility',
  active: true, // active by default
  className: 'btn-toggle-borders',
  label: '<u>B</u>',
  command: 'sw-visibility', // Built-in command
  }, {
  id: 'export',
  className: 'btn-open-export',
  label: 'Exp',
  command: 'export-template',
  context: 'export-template', // For grouping context of buttons from the same panel
  }, {
  id: 'show-json',
  className: 'btn-show-json',
  label: 'JSON',
  context: 'show-json',
  command(editor) {
      editor.Modal.setTitle('Components JSON')
      .setContent(`<textarea style="width:100%; height: 250px;">
          ${JSON.stringify(editor.getComponents())}
      </textarea>`)
      .open();
  },
  }
],
});
editor.on('run:export-template:before', opts => {
  console.log('Before the command run');
  if (0 /* some condition */) {
    opts.abort = 1;
  }
});
editor.on('run:export-template', () => console.log('After the command run'));
editor.on('abort:export-template', () => console.log('Command aborted'));
editor.Commands.add('show-layers', {
getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
getLayersEl(row) { return row.querySelector('.layers-container') },

run(editor, sender) {
  const lmEl = this.getLayersEl(this.getRowEl(editor));
  lmEl.style.display = '';
},
stop(editor, sender) {
  const lmEl = this.getLayersEl(this.getRowEl(editor));
  lmEl.style.display = 'none';
},
});
editor.Commands.add('show-styles', {
getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
getStyleEl(row) { return row.querySelector('.styles-container') },

run(editor, sender) {
  const smEl = this.getStyleEl(this.getRowEl(editor));
  smEl.style.display = '';
},
stop(editor, sender) {
  const smEl = this.getStyleEl(this.getRowEl(editor));
  smEl.style.display = 'none';
},
});
editor.Commands.add('show-traits', {
getTraitsEl(editor) {
  const row = editor.getContainer().closest('.editor-row');
  return row.querySelector('.traits-container');
},
run(editor, sender) {
  this.getTraitsEl(editor).style.display = '';
},
stop(editor, sender) {
  this.getTraitsEl(editor).style.display = 'none';
},
});
editor.Commands.add('set-device-desktop', {
run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-mobile', {
run: editor => editor.setDevice('Mobile')
});
