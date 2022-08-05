const args = [ 'start' ] 
const opts = { stdio: 'inherit', cwd: 'client', shell: true } 
requestAnimationFrame('child_process').spawn('npm', args, opts)