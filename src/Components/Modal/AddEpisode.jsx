import { useContext, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API } from '../../Config/Api';
import { AlertSuccess, AlertError } from './AlertCollection';
import { ModalContext } from '../../Context/ModalContext';
import { useLocation, useNavigate } from 'react-router';

const AddEpisode = (props) => {
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [_, modalDispatch] = useContext(ModalContext);
  const [form, setForm] = useState({
    thumbnail: '',
    title: '',
    year: '',
    video_link: '',
    film_id: '',
  });

  // let { data: movies, refetch } = useQuery('moviesCache', async () => {
  //   const response = await API.get('/films');
  //   return response.data.data;
  // });

  // console.log("ini movie : ", movies)

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
    });

  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      };
      const formData = new FormData();
      formData.set('image', form.thumbnail[0], form.thumbnail[0].name);
      formData.set('title', form.title);
      formData.set('year', form.year)
      formData.set('linkfilm', form.linkfilm);
      formData.set('film_id', id);

      const response = await API.post('/episode', formData, config);
      console.log('add episode success', response);
    } catch (err) {
      console.log('add episode failed', err);
    }
  });

  return (
    <div className={`${props.className}`}>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold mb-5 text-2xl text-white">Add Episode</h2>
      </div>
      {message && message}
      <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
        <div className="flex gap-x-3">
          <input onChange={handleOnChange} className="w-3/4 mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" type="text" name="title" placeholder="Title" />
          <input onChange={handleOnChange} className="w-1/4 mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none file-input-ghost file:text-white" type="file" name="thumbnail" id="" />
        </div>
        {/* <select onChange={handleOnChange} value={form.film_id} name="movie_id" className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full">
          <option className="hidden" value={'default'}>
            Category
          </option>
          {movies?.map((index, id) => (
            <option key={id} value={index?.id}>
              {index?.title}
            </option>
          ))}
        </select> */}
        <input onChange={handleOnChange} className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" type="text" name="linkfilm" id="" placeholder="Link Video" />
        <input onChange={handleOnChange} className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" type="text" name="year" id="" placeholder="year" />
        <button className="w-full bg-white py-2 rounded-md mb-2 text-red-700 font-semibold">Save</button>
      </form>
    </div>
  );
};

export default AddEpisode;
