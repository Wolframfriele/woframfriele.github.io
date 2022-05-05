import _ from 'lodash'
import all from '../data/projects/*.md'

export const projects = _.chain(all)
                         .map(transform)
                         .orderBy('date', 'desc')
                         .value()

function transform({filename, html, metadata}) {
    const permalink = filename.replace(/\.md$/, '')

    const date = new Date(metadata.date)

    return {...metadata, filename, html, permalink, date}
}

export function findPost(permalink) {
    return _.find(projects, {permalink})
}