const {
  REACT_APP_CLOUDINARY_DISTRIBUTION,
  REACT_APP_CLOUDINARY_NAME
} = process.env
const configureCloudinary = () => {
  const cl = new Cloudinary({
    cloud_name: REACT_APP_CLOUDINARY_NAME,
    secure_distribution: REACT_APP_CLOUDINARY_DISTRIBUTION,
    secure: true
  })
  return cl
}

const instance = configureCloudinary()

export default instance
