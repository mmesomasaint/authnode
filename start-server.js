const args = [ 'dev' ] 
const opts = { stdio: 'inherit', cwd: 'server', shell: true } 
requestAnimationFrame('child_process').spawn('npm', args, opts)