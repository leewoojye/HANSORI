import { useState, useEffect } from 'react';
import './Pungsa.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser'; //원래는 react-html-parser
import Axios from 'axios';

function Pungsa() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3306/api/get').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

  const submitReview = ()=>{
    Axios.post('http://localhost:3306/api/get', {
      title: movieContent.title,
      content: movieContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };

  return (
<<<<<<< Updated upstream
    <div
      className="contents"
      style={{ height: "100vh", paddingTop: "50vh", backgroundColor: "black" }}
    >
      페이지 준비중입니다.🐘
=======
    <div className="Pungsa">
      <h1>풍사에 오신걸 환영합니다!</h1>
      <div className='movie-container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>내용을 입력하시오.</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button
        className="submit-button"
        //onClick={submitReview}
        onClick={() => {
          setViewContent(viewContent.concat({...movieContent})); //수정 부분
        }
        }
        >입력</button>
>>>>>>> Stashed changes
    </div>
  );
}

export default Pungsa;