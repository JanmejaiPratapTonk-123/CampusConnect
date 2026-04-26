// CampusConnect — Mock Data Layer
// Realistic sample data for all pages

export const ambassadors = [
  { id: 1, name: 'Arjun Mehta', avatar: 'AM', college: 'IIT Delhi', city: 'New Delhi', status: 'active', points: 2840, rank: 1, tasksCompleted: 47, badge: 'Elite', streak: 14, joinDate: '2025-09-15', lastActive: '2 hours ago', performance: 96, email: 'arjun.m@iitd.ac.in', referrals: 34 },
  { id: 2, name: 'Priya Sharma', avatar: 'PS', college: 'BITS Pilani', city: 'Pilani', status: 'active', points: 2650, rank: 2, tasksCompleted: 42, badge: 'Elite', streak: 11, joinDate: '2025-08-20', lastActive: '5 hours ago', performance: 93, email: 'priya.s@bits.ac.in', referrals: 29 },
  { id: 3, name: 'Karthik Nair', avatar: 'KN', college: 'NIT Trichy', city: 'Trichy', status: 'active', points: 2210, rank: 3, tasksCompleted: 38, badge: 'Gold', streak: 8, joinDate: '2025-10-01', lastActive: '1 hour ago', performance: 88, email: 'karthik.n@nitt.edu', referrals: 22 },
  { id: 4, name: 'Sneha Reddy', avatar: 'SR', college: 'IIIT Hyderabad', city: 'Hyderabad', status: 'active', points: 1980, rank: 4, tasksCompleted: 35, badge: 'Gold', streak: 6, joinDate: '2025-09-28', lastActive: '3 hours ago', performance: 84, email: 'sneha.r@iiith.ac.in', referrals: 18 },
  { id: 5, name: 'Rohit Gupta', avatar: 'RG', college: 'DTU', city: 'New Delhi', status: 'active', points: 1750, rank: 5, tasksCompleted: 31, badge: 'Silver', streak: 5, joinDate: '2025-11-05', lastActive: '30 min ago', performance: 79, email: 'rohit.g@dtu.ac.in', referrals: 15 },
  { id: 6, name: 'Ananya Iyer', avatar: 'AI', college: 'VIT Vellore', city: 'Vellore', status: 'active', points: 1620, rank: 6, tasksCompleted: 28, badge: 'Silver', streak: 4, joinDate: '2025-10-12', lastActive: '6 hours ago', performance: 75, email: 'ananya.i@vit.ac.in', referrals: 12 },
  { id: 7, name: 'Vikram Singh', avatar: 'VS', college: 'IIT Bombay', city: 'Mumbai', status: 'inactive', points: 1450, rank: 7, tasksCompleted: 25, badge: 'Silver', streak: 0, joinDate: '2025-08-10', lastActive: '2 weeks ago', performance: 62, email: 'vikram.s@iitb.ac.in', referrals: 10 },
  { id: 8, name: 'Meera Patel', avatar: 'MP', college: 'NSUT', city: 'New Delhi', status: 'active', points: 1380, rank: 8, tasksCompleted: 22, badge: 'Bronze', streak: 3, joinDate: '2025-11-20', lastActive: '4 hours ago', performance: 70, email: 'meera.p@nsut.ac.in', referrals: 8 },
  { id: 9, name: 'Aditya Joshi', avatar: 'AJ', college: 'COEP Pune', city: 'Pune', status: 'active', points: 1210, rank: 9, tasksCompleted: 20, badge: 'Bronze', streak: 2, joinDate: '2025-12-01', lastActive: '1 day ago', performance: 66, email: 'aditya.j@coep.ac.in', referrals: 7 },
  { id: 10, name: 'Divya Krishnan', avatar: 'DK', college: 'IIT Madras', city: 'Chennai', status: 'inactive', points: 980, rank: 10, tasksCompleted: 16, badge: 'Bronze', streak: 0, joinDate: '2025-10-25', lastActive: '3 weeks ago', performance: 54, email: 'divya.k@iitm.ac.in', referrals: 5 },
  { id: 11, name: 'Harsh Vardhan', avatar: 'HV', college: 'NIT Warangal', city: 'Warangal', status: 'active', points: 890, rank: 11, tasksCompleted: 14, badge: 'Bronze', streak: 1, joinDate: '2026-01-10', lastActive: '8 hours ago', performance: 58, email: 'harsh.v@nitw.ac.in', referrals: 4 },
  { id: 12, name: 'Riya Bansal', avatar: 'RB', college: 'JECRC Jaipur', city: 'Jaipur', status: 'active', points: 740, rank: 12, tasksCompleted: 11, badge: 'Starter', streak: 1, joinDate: '2026-02-14', lastActive: '12 hours ago', performance: 52, email: 'riya.b@jecrc.ac.in', referrals: 3 },
];

export const colleges = ['All Colleges', 'IIT Delhi', 'BITS Pilani', 'NIT Trichy', 'IIIT Hyderabad', 'DTU', 'VIT Vellore', 'IIT Bombay', 'NSUT', 'COEP Pune', 'IIT Madras', 'NIT Warangal', 'JECRC Jaipur'];

export const tasks = [
  { id: 1, title: 'Social Media Campaign — Spring Launch', description: 'Post the spring campaign banner on Instagram, LinkedIn, and Twitter with #CampusConnect.', deadline: '2026-05-10', status: 'active', priority: 'high', assignedTo: [1, 2, 3, 5], submissions: 3, totalAssigned: 4, points: 150, category: 'Social Media' },
  { id: 2, title: 'Campus Workshop Recruitment', description: 'Recruit at least 20 students for the upcoming AI workshop on campus.', deadline: '2026-05-15', status: 'active', priority: 'high', assignedTo: [1, 4, 6, 8], submissions: 2, totalAssigned: 4, points: 200, category: 'Events' },
  { id: 3, title: 'Product Feedback Survey', description: 'Distribute the product feedback form and collect 50+ responses from peers.', deadline: '2026-05-08', status: 'completed', priority: 'medium', assignedTo: [2, 3, 7], submissions: 3, totalAssigned: 3, points: 120, category: 'Research' },
  { id: 4, title: 'Blog Post — Ambassador Experience', description: 'Write a 500-word blog about your ambassador journey for the CampusConnect blog.', deadline: '2026-05-20', status: 'active', priority: 'medium', assignedTo: [1, 5, 9, 11], submissions: 1, totalAssigned: 4, points: 180, category: 'Content' },
  { id: 5, title: 'Referral Drive — May Sprint', description: 'Refer 10+ new users to the platform using your unique referral link.', deadline: '2026-05-25', status: 'pending', priority: 'high', assignedTo: [2, 4, 6, 8, 10, 12], submissions: 0, totalAssigned: 6, points: 250, category: 'Growth' },
  { id: 6, title: 'Campus Poster Setup', description: 'Put up 15 CampusConnect posters in high-traffic areas. Upload photo proof.', deadline: '2026-04-30', status: 'completed', priority: 'low', assignedTo: [3, 7, 9], submissions: 3, totalAssigned: 3, points: 80, category: 'Marketing' },
  { id: 7, title: 'Peer Mentoring Session', description: 'Conduct a 30-min mentoring session for new ambassadors. Record and upload.', deadline: '2026-05-18', status: 'active', priority: 'medium', assignedTo: [1, 2], submissions: 0, totalAssigned: 2, points: 160, category: 'Community' },
  { id: 8, title: 'App Install Campaign', description: 'Get 25 verified app installs from your campus network.', deadline: '2026-06-01', status: 'pending', priority: 'high', assignedTo: [5, 6, 8, 11, 12], submissions: 0, totalAssigned: 5, points: 300, category: 'Growth' },
];

export const submissions = [
  { id: 1, taskId: 1, ambassadorId: 1, ambassadorName: 'Arjun Mehta', proof: 'https://instagram.com/p/campus_connect_spring', status: 'approved', submittedAt: '2026-04-24', notes: 'Posted on all three platforms with hashtags.' },
  { id: 2, taskId: 1, ambassadorId: 2, ambassadorName: 'Priya Sharma', proof: 'https://linkedin.com/post/priya-campus-connect', status: 'approved', submittedAt: '2026-04-23', notes: 'Great engagement — 200+ likes.' },
  { id: 3, taskId: 1, ambassadorId: 3, ambassadorName: 'Karthik Nair', proof: 'https://twitter.com/karthik/spring_launch', status: 'pending', submittedAt: '2026-04-25', notes: 'Awaiting verification.' },
  { id: 4, taskId: 2, ambassadorId: 1, ambassadorName: 'Arjun Mehta', proof: 'Screenshot of sign-up sheet with 24 names', status: 'approved', submittedAt: '2026-04-22', notes: 'Exceeded target by 4.' },
  { id: 5, taskId: 2, ambassadorId: 4, ambassadorName: 'Sneha Reddy', proof: 'Google Form responses - 21 sign-ups', status: 'pending', submittedAt: '2026-04-25', notes: 'Pending manual verification.' },
  { id: 6, taskId: 3, ambassadorId: 2, ambassadorName: 'Priya Sharma', proof: 'Survey link with 62 responses', status: 'approved', submittedAt: '2026-04-20', notes: 'Exceeded 50 target.' },
  { id: 7, taskId: 4, ambassadorId: 1, ambassadorName: 'Arjun Mehta', proof: 'https://blog.campusconnect.com/arjun-journey', status: 'approved', submittedAt: '2026-04-21', notes: 'Well-written and published.' },
];

export const activityFeed = [
  { id: 1, user: 'Arjun Mehta', action: 'completed task', target: 'Social Media Campaign', time: '2 hours ago', type: 'task' },
  { id: 2, user: 'Priya Sharma', action: 'earned badge', target: 'Elite Ambassador', time: '5 hours ago', type: 'badge' },
  { id: 3, user: 'Karthik Nair', action: 'submitted proof for', target: 'Spring Launch Campaign', time: '6 hours ago', type: 'submission' },
  { id: 4, user: 'System', action: 'new ambassador joined', target: 'Riya Bansal from JECRC', time: '1 day ago', type: 'join' },
  { id: 5, user: 'Sneha Reddy', action: 'reached milestone', target: '35 tasks completed', time: '1 day ago', type: 'milestone' },
  { id: 6, user: 'Rohit Gupta', action: 'referred', target: '3 new users today', time: '2 days ago', type: 'referral' },
  { id: 7, user: 'Admin', action: 'created new task', target: 'App Install Campaign', time: '2 days ago', type: 'task' },
  { id: 8, user: 'Ananya Iyer', action: 'completed', target: 'Campus Workshop Recruitment', time: '3 days ago', type: 'task' },
];

export const notifications = [
  { id: 1, title: 'New Submission', message: 'Karthik Nair submitted proof for Spring Launch Campaign', time: '6 hours ago', read: false, type: 'submission' },
  { id: 2, title: 'Task Deadline', message: 'Campus Poster Setup deadline is tomorrow', time: '12 hours ago', read: false, type: 'warning' },
  { id: 3, title: 'Achievement Unlocked', message: 'Priya Sharma earned the Elite Ambassador badge', time: '5 hours ago', read: true, type: 'achievement' },
  { id: 4, title: 'New Ambassador', message: 'Riya Bansal from JECRC Jaipur has joined the program', time: '1 day ago', read: true, type: 'info' },
  { id: 5, title: 'AI Insight', message: 'Vikram Singh shows signs of disengagement — consider re-engagement', time: '2 days ago', read: false, type: 'ai' },
];

export const monthlyGrowthData = {
  labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
  ambassadors: [4, 6, 7, 8, 9, 11, 12],
  tasks: [12, 18, 22, 28, 35, 42, 47],
  referrals: [15, 28, 40, 58, 72, 95, 120],
  engagement: [65, 70, 72, 78, 82, 85, 88],
};

export const analyticsData = {
  referralConversions: { total: 120, rate: 34.2, trend: '+12%' },
  taskCompletionRate: { total: 78, rate: 82.5, trend: '+5%' },
  engagementGrowth: { total: 88, rate: 88, trend: '+8%' },
  roi: { value: '340%', costPerAmbassador: '$12', revenuePerAmbassador: '$52', trend: '+18%' },
  topColleges: [
    { name: 'IIT Delhi', ambassadors: 2, points: 4220, tasks: 69, conversion: 42 },
    { name: 'BITS Pilani', ambassadors: 1, points: 2650, tasks: 42, conversion: 38 },
    { name: 'NIT Trichy', ambassadors: 1, points: 2210, tasks: 38, conversion: 35 },
    { name: 'IIIT Hyderabad', ambassadors: 1, points: 1980, tasks: 35, conversion: 31 },
    { name: 'VIT Vellore', ambassadors: 1, points: 1620, tasks: 28, conversion: 28 },
  ],
  weeklyTrend: [
    { week: 'W1', signups: 8, tasks: 15, referrals: 12 },
    { week: 'W2', signups: 12, tasks: 22, referrals: 18 },
    { week: 'W3', signups: 10, tasks: 28, referrals: 25 },
    { week: 'W4', signups: 15, tasks: 32, referrals: 30 },
  ],
};

export const aiInsights = [
  { id: 1, type: 'prediction', title: 'Rising Star Detected', description: 'Rohit Gupta shows a 92% probability of reaching Elite status within 3 weeks based on current trajectory.', confidence: 92, category: 'Growth', ambassador: 'Rohit Gupta', icon: '🚀', actionable: true },
  { id: 2, type: 'warning', title: 'Disengagement Risk', description: 'Vikram Singh has been inactive for 14 days. Historical data suggests 73% churn probability if no action is taken within 5 days.', confidence: 73, category: 'Retention', ambassador: 'Vikram Singh', icon: '⚠️', actionable: true },
  { id: 3, type: 'warning', title: 'At-Risk Ambassador', description: 'Divya Krishnan engagement dropped 40% this month. Recommend personal outreach and task difficulty reduction.', confidence: 68, category: 'Retention', ambassador: 'Divya Krishnan', icon: '📉', actionable: true },
  { id: 4, type: 'suggestion', title: 'Optimal Task Assignment', description: 'Assign "Referral Drive" to Meera Patel — her peer network analysis shows 3.2x higher conversion potential than average.', confidence: 85, category: 'Optimization', ambassador: 'Meera Patel', icon: '🎯', actionable: true },
  { id: 5, type: 'suggestion', title: 'Content Strategy Boost', description: 'Blog posts published on Tuesdays get 2.4x more engagement. Schedule "Ambassador Experience" posts accordingly.', confidence: 88, category: 'Strategy', icon: '📝', actionable: false },
  { id: 6, type: 'prediction', title: 'Next Month Forecast', description: 'Projected 18% growth in active ambassadors and 24% increase in task completion rate based on current momentum.', confidence: 81, category: 'Growth', icon: '📈', actionable: false },
  { id: 7, type: 'insight', title: 'Top Performing Cohort', description: 'Ambassadors who joined in Sept 2025 have 34% higher retention than other cohorts. Replicate onboarding pattern.', confidence: 90, category: 'Analysis', icon: '💡', actionable: false },
  { id: 8, type: 'suggestion', title: 'Gamification Boost', description: 'Introducing weekly challenges could increase task completion by ~22% based on behavioral modeling of current ambassadors.', confidence: 79, category: 'Engagement', icon: '🏆', actionable: true },
];

export const rewards = [
  { id: 1, name: 'Campus Legend', pointsRequired: 3000, icon: '🏆', description: 'Top of the leaderboard for 4 consecutive weeks', unlockedBy: [] },
  { id: 2, name: 'Elite Ambassador', pointsRequired: 2500, icon: '⭐', description: 'Accumulate 2500+ points', unlockedBy: [1, 2] },
  { id: 3, name: 'Gold Performer', pointsRequired: 2000, icon: '🥇', description: 'Complete 35+ tasks with 80%+ approval rate', unlockedBy: [1, 2, 3] },
  { id: 4, name: 'Silver Star', pointsRequired: 1500, icon: '🥈', description: 'Maintain 5+ week streak', unlockedBy: [1, 2, 3, 4, 5] },
  { id: 5, name: 'Referral King', pointsRequired: 1000, icon: '👑', description: 'Refer 20+ verified users', unlockedBy: [1, 2, 3] },
  { id: 6, name: 'First Steps', pointsRequired: 100, icon: '🌟', description: 'Complete your first task', unlockedBy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];

export const portalData = {
  assignedTasks: [
    { id: 1, title: 'Social Media Campaign — Spring Launch', deadline: '2026-05-10', status: 'submitted', points: 150, proofLink: 'https://instagram.com/p/campus_connect_spring' },
    { id: 4, title: 'Blog Post — Ambassador Experience', deadline: '2026-05-20', status: 'in_progress', points: 180, proofLink: '' },
    { id: 7, title: 'Peer Mentoring Session', deadline: '2026-05-18', status: 'not_started', points: 160, proofLink: '' },
  ],
  milestones: [
    { label: '10 Tasks', completed: true },
    { label: '25 Tasks', completed: true },
    { label: '50 Tasks', completed: false },
    { label: '100 Tasks', completed: false },
  ],
  weeklyStreak: [true, true, true, false, true, true, true],
  recentAchievements: [
    { title: 'Gold Performer', date: '2026-04-20', icon: '🥇' },
    { title: 'Referral King', date: '2026-04-15', icon: '👑' },
    { title: '10-Week Streak', date: '2026-04-10', icon: '🔥' },
  ],
};

export const pricingPlans = [
  { name: 'Starter', price: 'Free', period: '', features: ['Up to 25 ambassadors', '5 active tasks', 'Basic analytics', 'Email support', 'Community access'], cta: 'Get Started', highlighted: false },
  { name: 'Pro', price: '$49', period: '/mo', features: ['Up to 200 ambassadors', 'Unlimited tasks', 'Advanced analytics', 'AI insights', 'Priority support', 'Custom branding', 'API access'], cta: 'Start Free Trial', highlighted: true },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited ambassadors', 'Unlimited everything', 'Dedicated AI models', 'SSO & SAML', '24/7 phone support', 'Custom integrations', 'SLA guarantee', 'Onboarding manager'], cta: 'Contact Sales', highlighted: false },
];

export const testimonials = [
  { name: 'Sarah Chen', role: 'Growth Lead, TechStartup.io', quote: 'CampusConnect transformed our campus outreach. We went from 5 to 50 active ambassadors in 2 months with 3x better conversion rates.', avatar: 'SC' },
  { name: 'Raj Patel', role: 'Community Manager, EduVenture', quote: 'The AI insights are a game-changer. We can now predict which ambassadors need attention before they disengage. Our retention improved by 40%.', avatar: 'RP' },
  { name: 'Lisa Wang', role: 'VP Marketing, GrowthHub', quote: 'The gamification features keep our ambassadors motivated. The leaderboard and badge system created healthy competition that drives real results.', avatar: 'LW' },
];

export const features = [
  { title: 'AI-Powered Insights', description: 'Predict top performers, detect disengagement risk, and get smart task recommendations powered by machine learning.', icon: 'brain' },
  { title: 'Gamified Engagement', description: 'Points, badges, streaks, and leaderboards keep ambassadors motivated and competing to deliver results.', icon: 'trophy' },
  { title: 'Task Automation', description: 'Create, assign, and track tasks with automated deadlines, proof collection, and approval workflows.', icon: 'zap' },
  { title: 'Real-Time Analytics', description: 'Track referral conversions, engagement growth, ROI metrics, and college-wise performance in real-time.', icon: 'chart' },
  { title: 'Multi-Campus Management', description: 'Manage ambassadors across 100+ colleges from a single dashboard with college-level filtering and insights.', icon: 'building' },
  { title: 'Smart Leaderboards', description: 'Dynamic rankings with monthly champions, college leaderboards, and reward tracking to drive performance.', icon: 'award' },
];
