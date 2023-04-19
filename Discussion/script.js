tinymce.init({
    selector: '#myTextarea',
    height: '300px',
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help',
    menu: {
      file: { title: 'File', items: 'newdocument' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
      insert: { title: 'Insert', items: 'link media | template hr' },
      view: { title: 'View', items: 'visualaid visualchars visualblocks | spellchecker' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code' },
      table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
    },
    menubar: 'file edit view insert format tools table help',
  });
  