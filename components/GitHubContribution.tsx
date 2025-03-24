'use client';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContribution = () => {
  const username = 'AliOlkac'; // GitHub kullanıcı adınızı buraya yazın
  
  // Özel tema renkleri - neon temanıza uygun
  const theme = {
    dark: [
      'rgba(15, 15, 18, 0.8)',     // background - en düşük yoğunluk
      'rgba(0, 255, 180, 0.2)',    // primary hafif
      'rgba(0, 255, 179, 0.5)',    // primary
      'rgba(0, 255, 179, 0.9)',    // secondary
      'rgba(0, 255, 10, 1)'       // highlight - en yüksek yoğunluk
    ]
  };

  return (
    <div className="pt-4 pb-3 px-3 glass-effect border border-highlight/20 rounded-lg transition-all duration-300 hover:border-highlight/40 hover:shadow-neon-green">
      <h3 className="text-lg font-bold mb-4 text-highlight text-center">GitHub Katkılarım</h3>
      <div className="github-contribution-wrapper overflow-x-auto">
        <GitHubCalendar 
          username={username} 
          theme={theme}
          hideColorLegend
          hideMonthLabels={false}
          labels={{
            totalCount: '{{count}} katkı son yıl içinde'
          }}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          style={{
            margin: '0 auto',
            padding: '0.5rem 0',
            minWidth: '100%',
          }}
        />
      </div>
      <div className="text-center mt-4">
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-highlight text-sm hover:text-highlight transition-colors duration-300"
        >
          GitHub Profilimi Ziyaret Et
        </a>
      </div>
    </div>
  );
};

export default GitHubContribution; 