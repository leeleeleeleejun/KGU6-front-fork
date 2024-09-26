import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Container = styled.div`
  width: 100%;
  height: 500px;

  border: 1px solid gray;
  border-radius: 5px;
`;

export const ShowModalButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Modal = styled.div`
  width: 100px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const ModalItem = styled.div``;

export const Quill = styled(ReactQuill)`
  height: 200px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 70px;
  @media (max-width: 500px) {
    margin-bottom: 100px;
  }
`;

export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      [
        {
          color: [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466',
            'custom-color',
          ],
        },
        { background: [] },
      ],
      ['image'],
      ['clean'],
    ],
  },
};
