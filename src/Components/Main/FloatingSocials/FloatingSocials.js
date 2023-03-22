import React from 'react'

function FloatingSocials() {
  return (
    <div className='socials_tab'>
        <div className="localInbox"
        style={{ 
        background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        }}
        >
        {/* whats app */}
        </div>
        <div className="localInbox"
        style={{ 
        background: 'url(https://img.favpng.com/12/1/21/computer-icons-email-internet-icon-design-clip-art-png-favpng-sFFj7y8r7hD4PkXtawFnerUwG.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        
        }}
        >
        {/* localInbox */}
        </div>
        <div className="localInbox"
        style={{ 
        background: 'url(https://www.citypng.com/public/uploads/preview/-41601338027vkwdrvgf6d.png)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        }}
        >
        {/* whats app */}
        </div>     
    </div>
  )
}

export default FloatingSocials