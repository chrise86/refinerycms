// Use this to customize the visual editor boot process
// Just mirror the options specified in your visual editor's config with the new
// options here.  This will completely override anything specified in your visual
// editor's boot process for that key, e.g. skin: 'something_else'
if (typeof(custom_visual_editor_options) == "undefined") {
  custom_visual_editor_options = {};
}

var custom_visual_editor_boot_options = {
  containersItems: [
    {'name': 'h1', 'title':'Heading_1', 'css':'wym_containers_h1'}
    , {'name': 'h2', 'title':'Heading_2', 'css':'wym_containers_h2'}
    , {'name': 'h3', 'title':'Heading_3', 'css':'wym_containers_h3'}
    , {'name': 'h4', 'title':'Heading_4', 'css':'wym_containers_h4'}
    , {'name': 'h5', 'title':'Heading_5', 'css':'wym_containers_h5'}
    , {'name': 'p', 'title':'Paragraph', 'css':'wym_containers_p'}
  ],
  classesItems: [
    {
      name: 'text-align',
      rules: [
        {name: 'left', title: '{Left}'},
        {name: 'center', title: '{Center}'},
        {name: 'right', title: '{Right}'},
        {name: 'justify', title: '{Justify}'}
      ],
      join: '-',
      title: '{Text_Align}'
    }, {
      name: 'image-align',
      rules: [
        {name: 'left', title: '{Left}'},
        {name: 'right', title: '{Right}'}
      ],
      join: '-',
      title: '{Image_Align}'
    }, {
      name: 'font-size',
      rules: [
        {name: 'small', title: '{Small}'},
        {name: 'normal', title: '{Normal}'},
        {name: 'large', title: '{Large}'}
      ],
      join: '-',
      title: '{Font_Size}'
    }, {
      name: 'custom',
      rules: [
        {name: 'lead', title: 'Lead'}
      ],
      join: '-',
      title: 'Classes'
    }
  ]
};