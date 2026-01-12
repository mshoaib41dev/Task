// mockData.ts - All mock data for the HomePage

export interface NewsItem {
    id: string;
    text: string;
  }
  
  export interface CardData {
    id: string;
    imageUrl: string;
    title: string;
    subtitle: string;
  }
  
  export interface UserData {
    name: string;
    coins: number;
    followers: string;
    chatNotifications: number;
    notifications: string;
  }
  
  export interface WeatherData {
    temperature: number;
    condition: string;
  }
  
  // User Information
  export const userData: UserData = {
    name: "Anthony",
    coins: 523,
    followers: "19.9k",
    chatNotifications: 15,
    notifications: "99+",
  };
  
  // Weather Information
  export const weatherData: WeatherData = {
    temperature: 24,
    condition: "Partly Cloudy",
  };
  
  // News Data
  export const newsData: NewsItem[] = [
    { 
      id: '1', 
      text: "Multiple Israeli airstrikes in South Lebanon in sudden escalation." 
    },
    { 
      id: '2', 
      text: "Multiple Israeli airstrikes in South Lebanon in sudden escalation." 
    },
    { 
      id: '3', 
      text: "Tech stocks rally as AI innovation continues to drive market growth." 
    },
    { 
      id: '4', 
      text: "New climate agreement reached at international summit." 
    },
  ];
  
  // Install Now Cards
  export const installCards: CardData[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
      title: 'Join our exclusive foodie community',
      subtitle: 'Ad • Rvwd by 961',
    },
    {
      id: '2',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Transform your space',
      subtitle: 'Ad • Sponsored',
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      title: 'Shop the latest trends',
      subtitle: 'Ad • Featured',
    },
  ];