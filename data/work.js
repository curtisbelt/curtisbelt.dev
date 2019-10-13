export default [
  {
    title: 'Developer/Tech Lead',
    company: 'TRIBUS',
    startDate: '2017/01',
    endDate: '2019/09',
    location: 'Remote',
    description: [
      {
        label: 'Latest Projects',
        children: [
          'Created custom WordPress themes (PHP/HTML/SCSS/JS/jQuery)',
          'Created custom Nuxt.js themes (Vue.js/Vuex/Vue Router/JS/TailwindCSS/PostCSS)',
          'Created a Nuxt.js + WordPress framework nicknamed "NuxtPress" to speed up creation of future projects',
          'Created custom WordPress API which had two goals in mind: drastically improve read performance, and enhance developer quality of life',
          'Created library of shared Vue.js components for common features and functionality'
        ]
      },
      {
        label: 'AWS Cloud Architecture',
        children: [
          'Fault tolerance: minimum 2 EC2 instances, read replica on RDS, moved user media to S3',
          'High availability: I wrote a bash script for in-place rapid deployments, which performed an atomic deployment via symlinks. I also wrote a custom PHP script to fully preload the PHP OPCache, which would run after any deployment',
          'Automation: Created bash scripts for auto-generating NGINX config files from database, cloning production to staging/testing/local, data migrations for client launches, and more. Automated CNAME management on Cloudflare using their developer API',
          'Deployment Engineer: Responsible for safe deployment of releases into production environment',
          'On-call 24/7: Proactive monitoring was key to catching problems before they occurred. Used Cloudwatch to monitor server health metrics and send text/email alerts'
        ]
      },
      {
        label: 'Leadership',
        children: [
          'Spent a year as a Tech Lead for a 3 person team before I left',
          'Trained/mentored, assigned tasks based on skill to encourage growth',
          'Established consistency for the team, such as code format/linting rules, developer workstation configuration (LEMP stack, etc), deployment processes and so on.'
        ]
      }
    ]
  },
  {
    title: 'Jr. Developer',
    company: 'TRIBUS',
    startDate: '2015/06',
    endDate: '2017/01',
    location: 'Chicago, IL',
    description: [
      'Created and maintained all custom WordPress themes',
      'Mapping RETS data imports to our standardized database fields',
      'Assisted Sr. Developer with transition from WPEngine to custom AWS infrastructure',
      'Continued maintenance and improvements on WordPress AWS infrastructure'
    ]
  },
  {
    title: 'Tier 2 Customer Support',
    company: 'TRIBUS',
    startDate: '2015/02',
    endDate: '2015/06',
    location: 'Chicago, IL',
    description: [
      'Hired with intent to transition to developer role',
      'Created and maintained data standardization maps for RETS feed importer.',
      'Performed detailed analysis of individual RETS feeds to ensure as much data as possible was imported',
      'Used basic Ruby scripting for tasks such as cleaning up formatting, and conditionally importing multiple columns into one.',
      'Assisted with chat support queue while training for more technical tasks'
    ]
  },
  {
    title: 'Order Management Specialist (SAP ERP)',
    company: 'Westcon-Comstor',
    startDate: '2014/09',
    endDate: '2015/01',
    location: 'Omaha, NE',
    description: [
      'Meant to be a shorter-term job after a failed business venture, but I was having fun writing AutoHotkey scripts to automate data entry.'
    ]
  },
  {
    title: 'Web Developer & IT Admin',
    company: 'Fidelity Financial Corporation',
    startDate: '2012/12',
    endDate: '2014/07',
    location: 'Omaha, NE',
    description: [
      'Administrator of website, email, hosting.',
      'Lead initiative to upgrade outdated office technology',
      'Deployed new CRM to more efficiently manage leads and opportunities',
      'Converted client paperwork to digital copy which drastically reduced missed sales opportunities.',
      'General IT support for all computer equipment.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Quick Connect',
    startDate: '2012/03',
    endDate: '2012/11',
    location: 'Omaha, NE',
    description: [
      'Independently managed Quick Connect’s web development department',
      '45+ Joomla and WordPress websites (mostly small businesses)',
      'HTML, CSS, JS, PHP, deployed via FTP to Dreamhost',
      'Maintained Quick Connect’s website and internal custom applications (employee time sheets, invoice generator)'
    ]
  },
  {
    title: 'Bench Technician',
    company: 'Quick Connect',
    startDate: '2010/11',
    endDate: '2012/03',
    location: 'Lincoln, NE',
    description: [
      'Independently managed Omaha office for 6 months.',
      'PC/Mac repair, laptop screen repair, data recovery, virus removal, etc.',
      'Created quotes for custom PCs, facilitated data migration from old PC, and delivered/setup to client’s home or office.'
    ]
  },
  {
    title: 'Fire Support Specialist',
    company: 'Army National Guard',
    startDate: '2007/06',
    endDate: '2011/03',
    location: 'Lincoln, NE',
    description: [
      'Deployed for 2 weeks to Louisiana in September 2008 for Hurricane Gustav and Ike relief operations, working as a driver.',
      'Honorably/medically discharged in March 2011 due to a broken leg caused by a motorcycle accident.'
    ]
  }
]
