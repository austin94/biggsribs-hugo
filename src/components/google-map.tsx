import React from 'react'

interface IGoogleMapProps {
  isFrameless?: boolean
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ isFrameless }) => {
  const map = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.3068020835312!2d-95.26402264893623!3d38.939818879463786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf68da4a3b6fd5%3A0x7ae16097d3e41dd!2sBigg&#39;s+Barbecue!5e0!3m2!1sen!2sus!4v1525058041507"
      width="100%"
      height="450"
      style={{ border: 0 }}
    />
  )

  if (isFrameless) {
    return map
  }

  return (
    <div className="bg-grey-1 pv4">
      <div className="flex-l mhn1-l ph3 center mw7">
        <div className="w-100 mw-100">{map}</div>
      </div>
    </div>
  )
}

export default GoogleMap
