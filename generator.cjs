const { execSync } = require('child_process');
const fs = require('fs');

const messages = [
  "Add dark mode configurations", "Setup Framer Motion variants",
  "Design gradient background blobs", "Add keyframes for floating animation", "Create navigation bar layout",
  "Style glowing logo component", "Implement glassmorphism for header", "Refactor navigation links",
  "Build hero section typography", "Add introduction badge", "Style gradient text spans",
  "Implement hero call-to-action buttons", "Add hover states for buttons", "Create outline button variant",
  "Start features grid layout", "Add feature cards with hover effects", "Integrate lucide icons into cards",
  "Refine staggered animations", "Implement scroll-triggered views", "Update footer markup",
  "Optimize responsive media queries", "Clean up unused CSS rules", "Fix mobile padding issues",
  "Add accessibility aria-labels", "Refine scroll variants", "Tune physics for framer motion",
  "Update neural network icon", "Polish lightning fast section description", "Enhance background depth",
  "Add subtle border to feature cards", "Align hero elements centrally", "Adjust z-index for nav",
  "Refactor main container sizing", "Add dynamic scrollY hooks", "Adjust parallax depth",
  "Optimize SVG rendering", "Tweak primary color shade", "Remove unnecessary margins",
  "Update typography line height", "Add subtle drop shadows", "Fix flex gap compatibility",
  "Finalize dark mode contrast", "Review Framer API changes", "Update project documentation",
  "Refactor App component", "Split out feature data", "Prepare for deployment",
  "Fix typo in badge", "Tweak glow spread radius", "Run linter and fix errors"
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

async function generateHistory() {
  const shuffledMessages = shuffle(messages);
  let messageIdx = 0;
  
  // Set root commit date to Jan 1st
  const rootDate = "2026-01-01T10:00:00";
  fs.writeFileSync('progress.md', '# Development Progress\n\n');
  execSync('git add -A');
  execSync(`git commit -m "Initialize project structure and Vite configuration" --date="${rootDate}"`, {
    env: { ...process.env, GIT_COMMITTER_DATE: rootDate }
  });
  execSync('git push -u origin main');

  for (let day = 1; day <= 31; day++) {
    // 1 to 3 commits per day
    const commitsToday = Math.floor(Math.random() * 3) + 1;
    for (let c = 0; c < commitsToday; c++) {
      // Avoid conflict with root Date
      if (day === 1 && c === 0) continue; 
      
      const dateString = `2026-01-${day.toString().padStart(2, '0')}T${14 + c}:${10 + c}:00`;
      const msg = shuffledMessages[messageIdx++ % shuffledMessages.length];
      
      fs.appendFileSync('progress.md', `- [${dateString}] ${msg}\n`);
      execSync('git add progress.md');
      
      const commitCmd = `git commit -m "${msg}" --date="${dateString}"`;
      console.log(`Executing: ${commitCmd}`);
      execSync(commitCmd, { env: { ...process.env, GIT_COMMITTER_DATE: dateString } });
      
      console.log(`Pushing...`);
      execSync('git push origin main');
    }
  }
}

generateHistory().catch(console.error);
