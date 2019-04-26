import { Cloudinary } from 'cloudinary-core'
const { REACT_APP_CLOUDINARY_DISTRIBUTION } = process.env

console.log(REACT_APP_CLOUDINARY_DISTRIBUTION)

const configureCloudinary = () => {
  const cl = new Cloudinary({
    cloud_name: 'roa-canon',
    secure_distribution: REACT_APP_CLOUDINARY_DISTRIBUTION,
    secure: true
  })
  return cl
}

const instance = configureCloudinary()

export default instance
