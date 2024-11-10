
import Image from 'next/image';
import profile from '../../../public/profile.png';

interface IProps {
  className?: string
}

const ProfileCard:React.FC<IProps> = ({className}) => {
  return (
    <div className={`bg-secondary shadow-lg pt-11 w-full max-w-[375px] text-center ${className}`}>
      <div className="rounded-full overflow-hidden w-52 h-52 mb-6 mx-auto">
        <Image src={profile} alt="My Image" />
      </div>
      <div className='max-w-[170px] mx-auto mb-12'>
        <h2 className="text-lg font-semibold text-gray-900 text-[30px] leading-tight">Saurin Patel</h2>
        <div className="w-12 h-[3px] bg-blue my-6 mx-auto" />
        <p className="text-gray-600 tracking-widest uppercase">Full Stack Developer</p>
      </div>
      <div className="flex mt-4 space-x-3 bg-white h-[53px]">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-facebook"></i> {/* Add icons */}
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  )
}

export default ProfileCard;