import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'mathtype-ckeditor5-build-strapi-wysiwyg';
import styled from 'styled-components';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/ar';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/cs';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/de';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/es';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/fr';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/id';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/it';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/ko';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/nl';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/pl';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/pt';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/pt-br';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/ru';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/sk';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/th';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/tr';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/uk';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/vi';
import 'mathtype-ckeditor5-build-strapi-wysiwyg/build/translations/zh';


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    max-height: 400px;
    > div {
      min-height: 200px;
      max-height: 400px;
    }
  }
`;

const Editor = ({ onChange, name, value, config }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={editor => {
          if (value) {
            editor.setData(value);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={config}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;