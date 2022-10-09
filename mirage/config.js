export default function() {
      this.namespace = '/api';
    
  let rentals = [{
            id:'0',
            name:"Apple iPhone 13 pro max",
            description:"4000 mAh battery 40 MP rear camera",
            originalPrice:"119999",
            currentPrice: "99999",
            features:`
                "High Oerformance",
                "15 cm (6.1-inch) Super Retina XDR display",
                "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
                "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
                "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                "A15 Bionic chip for lightning-fast performance",
                "Up to 19 hours of video playback",
                "Durable design with Ceramic Shield",
        
            `,
            color:'red',
            image:'/images/phone-red.png',
        
        },
        {   id:'1',
            name:"Apple iPhone 13 pro max",
            description:"4000 mAh battery 40 MP rear camera",
            originalPrice:"119999",
            currentPrice: "99999",
            features:`
                "High Oerformance",
                "15 cm (6.1-inch) Super Retina XDR display",
                "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
                "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
                "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                "A15 Bionic chip for lightning-fast performance",
                "Up to 19 hours of video playback",
                "Durable design with Ceramic Shield",
        
            `,
            color:'red',
            image:'/images/phone-red.png',
        
        },{
            id:'2',
            name:"Apple iPhone 13 pro max",
            description:"4000 mAh battery 40 MP rear camera",
            originalPrice:"119999",
            currentPrice: "99999",
            feature:`
                "High Oerformance",
                "15 cm (6.1-inch) Super Retina XDR display",
                "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
                "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
                "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                "A15 Bionic chip for lightning-fast performance",
                "Up to 19 hours of video playback",
                "Durable design with Ceramic Shield",
        
            `,
            color:'black',
            image:'/images/phone-black.png',
        
        },
        {   id:'3',
            name:"Apple iPhone 13 pro max",
            description:"4000 mAh battery 40 MP rear camera",
            originalPrice:"119999",
            currentPrice: "99999",
            features:`
                "High Oerformance",
                "15 cm (6.1-inch) Super Retina XDR display",
                "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
                "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
                "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                "A15 Bionic chip for lightning-fast performance",
                "Up to 19 hours of video playback",
                "Durable design with Ceramic Shield",
        
            `,
            color:'black',
            image:'/images/phone-black.png',
        
        }];
        
        this.get('/rentals', function(db, request) {
            if(request.queryParams.name !== undefined) {
              let filteredRentals = rentals.filter(function(i) {
                return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
              });
              return { data: filteredRentals };
            } else {
              return { data: rentals };
            }
          });
        };