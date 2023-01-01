import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Layout } from '../components'
import './style.css'

const AddItems = () => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/items`
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const handleAddProduct = async (e) => {
    e.preventDefault()
    const img = `./img/${image.name}`
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('img', `./img/${img.name}`)

    if (name === '' || price === '' || img === '') {
      toast.error('Please fill out the required fields.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      await axios.post(apiUrl, { name, price, img }).catch((error) => alert(error)).finally(() => {
        setName('')
        setImage('')
        setPrice('')
        toast('Product added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    }
  }
  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div class="addproduct-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form method="post" onSubmit={handleAddProduct} >
            <h2 class="text-center"><strong>Add</strong> your product here.</h2>
            <label htmlFor="name">Name</label>
            <div class="form-group"><input class="form-control" type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} /></div>
            <label htmlFor="price">Price</label>
            <div class="form-group"><input class="form-control" type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /></div>
            <label htmlFor="img">Image</label>
            <div class="my-3 form-group"><input class="form-control" type="file" name="img" id='img' onChange={(e) => setImage(e.target.files[0])} /></div>
            <div class=" form-group"><button class="btn btn-outline-dark w-50 btn-block text-uppercase" type="submit">add</button> </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default AddItems