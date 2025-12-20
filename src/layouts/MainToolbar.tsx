import BackUpGroup from '../components/Toolbar/BackUpGroup'
import ImageProcessGroup from '../components/Toolbar/ImageProcessGroup'
import StatusGroup from '../components/Toolbar/StatusGroup'
import ProgressStatus from '../components/Toolbar/ProgressStatus'

function MainToolbar() {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <div className='grid grid-cols-3 items-center'>
        <BackUpGroup></BackUpGroup>
        <ImageProcessGroup></ImageProcessGroup>
        <StatusGroup></StatusGroup>
      </div>
      <div className="flex justify-center items-center">
        <ProgressStatus></ProgressStatus>
      </div>
    </div>
  )
}

export default MainToolbar