
import { useState, useRef } from 'react';
import React from 'react'
import Header from '../components/HeaderAyas';
const Messages = ({ Se }) => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: "",
    bio: '',
    images: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedReels, setSelectedReels] = useState([]);
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    const imageUrls = files.map(file => URL.createObjectURL(file)); // Create URLs for the selected files
    setSelectedImage(prevImages => [
      ...prevImages,
      ...imageUrls,
    ]); // Update state with new image URLs
  };

  const handleFileChange2 = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    const imageUrls = files.map(file => URL.createObjectURL(file)); // Create URLs for the selected files
    setSelectedReels(prevImages => [
      ...prevImages,
      ...imageUrls,
    ]); // Update state with new image URLs
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Click the file input element
  };

  const handleButtonClick2 = () => {
    fileInputRef2.current.click(); // Click the file input element
  };
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const { name, username, email, phone, bio } = formData;
    if (!name || !username || !email || !phone || !bio) {
      alert('Please fill out all fields.');
      return; // Stop form submission if validation fails
    } else {
      alert('Your code is submitted')
      setFormSubmitted(true);
      setSelectedImage([]);

    }

    // Proceed with form submission if all fields are filled
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      username: '',
      email: '',
      phone: '',
      bio: '',
      images: '',
      reels: '',
      password: '',
    });
  };
  // React.useEffect(() => {
  return (
    <div>
      <Header title={Se} />
      <div className="grid grid-cols-1 h-24">
        <div className="  "><p className="absolute left-4"><img src="/assets/Images/mohanlal.jpeg" alt="" className="h-16 rounded-full mt-4" ></img></p></div>
        <div>
          <div className=" "><p className="absolute left-24 -mt-8 font-bold">Mohanlal</p></div>
          <div className=" "><p className="absolute left-24 text-sm">Never give up</p></div>

        </div>

      </div>

      <div className='container -mx-8 lg:w-full'>
        <div className='flex justify-center'>

          <form onSubmit={handleSubmit} className='grid grid-cols-1 mt-4'>
            <div className='mt-8'>
              <label className=''>
                Name
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full '
                type="text"
                name="name"

                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='mt-8'>
              <label className='py-4'>
                Username
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full'
                type="text"
                name="username"

                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className='mt-8'>
              <label className=''>
                Email
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full'
                type="text"
                name="email"

                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='mt-8'>
              <label className=''>
                Phone Number
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full'
                type="text"
                name="phone"

                value={formData.phone}
                onChange={handleChange}
              />
            </div>
           
         
            <div className='mt-8'>
              <label className=''>
                Bio
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full'
                type="text"
                name="bio"

                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            <div className='mt-8'>
              <label className=''>
                Images
              </label>

            </div>
            <div className=''>
              {/* File input element */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the file input
                onChange={handleFileChange}
              />

              {/* Button to trigger file input */}


              {/* Display the selected image */}

              <div className='grid grid-cols-6'>
                {selectedImage.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Selected ${index}`}
                    className='h-6'
                  // style={{ marginRight: '10px', maxWidth: '200px', maxHeight: '200px' }}
                  />
                ))}
                <button type="button" onClick={handleButtonClick}>
                  <img src="/assets/Images/plus-solid.svg" alt="" className='h-5 ' />
                </button>
              </div>



            </div>
            <div className='mt-8'>
              <label className=''>
                Reels
              </label>

            </div>
            <div className=''>
              {/* File input element */}
              <input
                type="file"
                ref={fileInputRef2}
                style={{ display: 'none' }} // Hide the file input
                onChange={handleFileChange2}
              />

              {/* Button to trigger file input */}


              {/* Display the selected image */}

              <div className='grid grid-cols-6'>
                {selectedReels.map((reels, index) => (
                  <img
                    key={index}
                    src={reels}
                    alt={`Selected ${index}`}
                    className='h-6'
                  // style={{ marginRight: '10px', maxWidth: '200px', maxHeight: '200px' }}
                  />
                ))}
                <button type="button" onClick={handleButtonClick2}>
                  <img src="/assets/Images/plus-solid.svg" alt="" className='h-5 ' />
                </button>
              </div>



            </div>

            <div className='mt-8'>
              <label className=''>
                Change Password
              </label>

            </div>
            <div>
              <input className='  border-b-purple-900 border-b-2 w-full'
                type="text"
                name="password"

                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='grid grid-rows-3 mt-8 mx-7 bg-pink-900 h-16 my-5 rounded-full justify-center'>
              <div></div>
              <div>
                {/* <label className='grid place-content-center '>
                        UPDATE
                    </label> */}
                <button type="submit" className='mx-16 text-white '>Update</button>

              </div>
              <div></div>

            </div>

          </form>

        </div>

      </div>
    </div>
  )
}
//     )
// }
export default Messages





