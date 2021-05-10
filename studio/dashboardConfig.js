export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6099257453ac8fed5bb60919',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j3vfnmqp',
                  apiId: '8bd9f868-4e10-44d0-b841-3ffdaf9d4b83'
                },
                {
                  buildHookId: '609925742b52574df6dd11ec',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i374enhs',
                  apiId: 'eadf83fb-d6f9-4b79-a2d7-8c1cf6864ee2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koheimukai/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i374enhs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
