import React from 'react';
import Giscus from '@giscus/react';
import { useTheme } from '../context/ThemeContext'; // <-- Step 1: Context import kiya

const Comments = () => {
  const { theme } = useTheme(); // <-- Step 2: Current theme nikala ('light' ya 'dark')

  // Giscus theme url/name decide karna
  // Agar dark hai to 'dark', nahi to 'light' (ya 'light_high_contrast' agar chaho)
  const giscusTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
      <h2 className="text-3xl font-bold text-sky-700 dark:text-sky-400 mb-8">
        Comments & Discussion
      </h2>
      
      {/* Container Styling - Experience Card jaisa look diya hai */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-sky-100 dark:border-slate-700 p-4 md:p-6">
        <Giscus
          key={theme} // <-- Important: Theme change hone par Giscus reload hoga
          id="comments"
          repo="rajeevkumar-nita/rajeevkumar-nita.github.io"
          repoId="R_kgDOPPvuQg"
          category="General"
          categoryId="DIC_kwDOPPvuQs4Cx70a"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={giscusTheme} 
          lang="en"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Comments;





// import React from 'react';
// import Giscus from '@giscus/react';
// import { useTheme } from '../context/ThemeContext'; // Context import

// const Comments = () => {
//   const { theme } = useTheme(); // Current theme (light/dark)

//   return (
//     <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
//       <h2 className="text-3xl font-bold text-sky-700 dark:text-sky-400 mb-8">
//         Comments & Discussion
//       </h2>
      
//       {/* Container ka background set kiya hai taaki Giscus alag na lage */}
//       <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-sky-100 dark:border-slate-700 p-4 md:p-6">
        
//         <Giscus
//           // 1. SABSE IMPORTANT LINE: Ye Giscus ko force karega reload hone ke liye jab theme badlega
//           key={theme} 
          
//           id="comments"
//           repo="rajeevkumar-nita/rajeevkumar-nita.github.io"
//           repoId="R_kgDOPPvuQg"
//           category="General"
//           categoryId="DIC_kwDOPPvuQs4Cx70a"
//           mapping="pathname"
//           reactionsEnabled="1"
//           emitMetadata="0"
//           inputPosition="bottom"
          
//           // 2. Theme Logic: Agar dark hai to 'dark', nahi to 'light_high_contrast' (taaki text dark black dikhe)
//           theme={theme === 'dark' ? 'dark' : 'light_high_contrast'}
          
//           lang="en"
//           loading="lazy"
//         />
//       </div>
//     </div>
//   );
// };

// export default Comments;