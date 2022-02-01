import { html } from 'lit'

function instagram(color = '#525963') {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${color}">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  `
}

function squid(color = '#525963') {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="45px" viewBox="0 0 40 45">
      <path d="M71.82,49.3a19.479,19.479,0,1,0-38.957.005L71.82,49.3Z" transform="translate(-32.863 -22.592)" fill="${color}" />
      <path
        d="M69.335,60.57a.771.771,0,0,1-.783-.7L65.634,20.423c-.113-1.487-.664-2.1-.934-2.1h0c-.283,0-.849.645-.942,2.185L61.645,56.9c-.16,2.642-1.446,3.589-2.5,3.6-1.026,0-2.312-.895-2.516-3.47L53.79,20.263c-.117-1.476-.664-2.085-.932-2.085h0c-.283,0-.85.646-.942,2.185l-2.227,36.3c-.16,2.634-1.443,3.583-2.493,3.6-1.022.024-2.3-.876-2.517-3.421L41.254,17.642a.761.761,0,0,1,.719-.808.782.782,0,0,1,.848.684l3.423,39.193c.126,1.45.666,2.049.929,2.049h0c.284,0,.85-.649.944-2.186l2.226-36.3c.16-2.64,1.446-3.587,2.5-3.6h.015c1.03,0,2.3.907,2.5,3.471L58.2,56.911c.118,1.476.665,2.086.933,2.086h0c.283,0,.85-.646.942-2.185l2.112-36.391c.16-2.644,1.447-3.591,2.5-3.6H64.7c1.035,0,2.307.914,2.5,3.495L70.12,59.769a.762.762,0,0,1-.729.8l-.056,0Z"
        transform="translate(-36.805 -16.417)"
      />
    </svg>
  `
}

function pay(color = '#525963') {
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${color}">
      <path
        d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z"
      />
    </svg>
  `
}

export default {
  instagram,
  pay,
  squid,
}
