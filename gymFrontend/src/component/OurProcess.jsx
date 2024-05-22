

const cardClasses = "bg-zinc-700 p-6 rounded-lg shadow-lg text-white";
const iconClasses = "bg-red-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center";
const textClasses = "text-xl font-semibold";

const ProcessCard = ({ iconSrc, altText, title }) => (
  <div className={cardClasses}>
    <div className={iconClasses}>
      <img src={iconSrc} alt={altText} />
    </div>
    <h3 className={textClasses}>{title}</h3>
  </div>
);

const StatCard = ({ iconSrc, altText, number, label }) => (
  <div className="text-center text-white bg-zinc-700 p-6 rounded-lg shadow-lg justify-items-center items-center">
    <img src={iconSrc} alt={altText} className="mx-auto mb-2" style={{width:"40px"}} />
    <h4 className="text-2xl font-bold">{number}</h4>
    <p className="text-red-500">{label}</p>
  </div>
);

const OurProcess = () => {
  return (
    <div className="text-red-500 py-12">
      <div className="container mx-auto text-center justify-items-center items-center">
        <h2 id="process" className="text-3xl font-bold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ProcessCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgpJREFUSEu11UuojVEUB/DfFRkIRSmFUkIUMlDII6EUE68BpcSEKRMht+RRyEhJoRQGzDxSlLxSSqEMFJnIABOvUMJetc9tO/d89/vO4K7Jeey11n89/6vHIEvPIPtXBzAc67ASczAZf/AGT3AXW7AI97AD78ugBwJYhdOY1EWWtxB2fVIFcCBp9GatD7iAG3iBoZiBmTiCkYW/LxhdB7ATp/Abx3AI3yuyOIetxdvtXM7KDKLGL/EXC/GspjwTUyD7sB4PEMFV9iDK9QjzsR1n25zPSu8r8n938LxJb8oeRMQP8RrT8rSEj3EZbHWbw+vYlqKOHlVKCbA713wPjhYW19DuvPUcIGuaAlzNMz87T0vYxfe6PpT6/bDKDD5hLEbha9bcheM1tY7MT1Tp1G1ytwAR3Gd8a+1HHUBMTt20BIW0dOamnjzFK0yPrOoAQqebJsdOHExTeBmbmgI0HdMgxrcYj8241BSg1b+YluX5R1BC8FIphxEj/i45n4ofVQCx/sFFSzIl782fAw3TPDzGEGxMRHilpdypB8HriwtvkWqk3EnCPnjofFrSEZkJ4jb0SSeAoNx2Cg7GvImfGJOPT2z3BkzI3oLH1rZTRyeAuFJLa5arfP6VbsBJ7M8U/59pJ4DowRksyCfxIpalDKLOU9J9GIaPiM2/n49OJeE12YMukumvOugA/wDDr2IZbs+CjgAAAABJRU5ErkJggg==" altText="Analyze Icon" title="ANALYZE YOUR GOAL" />
          <ProcessCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIdJREFUSEtjZKAxYKSx+QyjFhAMYXxB9B9JNy51BNUMPwsOMjAw2DEwgFMXQe9jUQPSc4CBgcERFrzoQQQzlBILQGbDzaWrBehBgswnmBxxBSuyD2huAciVQzsOQD7YD0xmDhQm0z0MDAyuuJIpcmSSkw8wEsPwKyqISe8kqRmt0QgGF82DCAC+ZCwZOck0AQAAAABJRU5ErkJggg==" altText="Work Hard Icon" title="WORK HARD ON IT" />
          <ProcessCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAHBJREFUSEtjZKAxYKSx+Qy4LDjFwMBgimb5aQYGBjNSHYTLgv84DCLZxyPXAqLjiNwgIjqORi1AT80YITIaRKNBhFHkwRIFxRmNUFFASB7uMpKLX2rVB6Sag1M9sg9whSu5loHNpqsF5LoUrz6aRzIALXEiGf4faSEAAAAASUVORK5CYII=" altText="Improve Icon" title="IMPROVE YOU" />
          <ProcessCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAldJREFUSEu11UnIjWEUB/DfFylCbJAFEkUkQyjKGFFEkWEjCzbYmMpQhggLw0ayILFBIULGMpcMISuUQspQNqaFDM/Rc+v1uve737f4Tr3d957nnPM/53/Oc94GLSwNLRxfPYDWmIbhGJx/I6f7eJTOHuAsftZKtDGA3jiBIXWqDLB5eFnNrhbAEuxE2wRwJmV/GpvRIwf5juOYiU74ilXYXwapBrAxGW3KTrNwKTt1zAHaYxle5wRWInyCzg3YUgQpA8zI2X7BKDxt4hAMwzV0yD07X/ErArTCcwT3kfmpJgavmM3FsRyjf6rmVxwUAeZkXj+iS43gMU2VKapm8gmdMR3nygCH0yQsyF6TcLUUYTl2Z90K7Cmdh8/lrNuHpWWAF+iTDW5gXH7vhr2ZtmLMk7nZ77LyNkbn97gjQ8sAP/IkhD6qWZiNox9xH6rJbARQxafCwAd0LQNEU6InUUnc2m+FiJHlX4eCvE9jG9VVpF26F4/RF1UB3qI7JqdSr5SCBffRg6JED6IXRZmCC3iSk/xnimKnxN5Zix0lx5ieeyXdiLyTiur1ieatOIhFZYqC80OZogGInjRH2uAZemEqLpYBwuBV5nV13kXNAYjKt+XbP6jiWF4VsRWPlqKOxc0aSDHKsSKKMqGoq7bsgsPgsiLXMb4GwN3U1JGFs3XYXrStta4Xp8W1Ky+vsI8NeSutgIeJhqByYPo/EWtysM95og6UE2nsg9MzLb4jGFOnEXdSc+fjTTW7ep/M8OmXQQIont+5J9GXeGJyakpTAJozSf/ZtjjAHzV1ahkSY6faAAAAAElFTkSuQmCC" altText="Achieve Icon" title="ACHIEVE GOALS" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <StatCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAidJREFUSEu1lc2rjVEUxn+PDFCUJOVjgJKRhCgRku+PCH+BudK9+ZbBleLqRqb4A0iIkKTc4iIlI3NmBigfA8pjr9M+es/2nnuO6949O6e11289a6/1vGKMj8Y4P38BbE8HzgPbMvwOcFDS55EU0wKwHb9fAsuKZE8lrRoNwGbgPvAeWAoNha+BmcB6SY+rENv7gKPAQuAt0CfpVjWmVNAL9AMDknoi0PZF4ADQI2mgedn29lREtK88LYWUgL3A9axgCTAeeAXMAnZXq7P9PKldARyWdM728RR/GhiUtKZJLQHjgEfAuqKsB+lttkpyRcE3YBIwWdLXpHRqUvoxKf2SlE6pBeSWTASOASdy0EngrKSfRf9fAMuBQ5L6bUd8X1L6Jild3BZQqbBRraTaXbG9MQ9EqG6eX6Fe0uB/A7LatcAVYF5UDpyRdK3tFBUtGFZBRWkkXgRskvSwHKm2VmG7I8D2TuA28AGYXb5To8XttrMTwPaulPQyMC2N9X5JV+tydQ2wPQOYD6xOuxFLFtYRj3pKUsx/7akzuwnAkbjY7lL+/xnQK2louLg6QDzUhppL3/OkPAFuSIoN73jKTW6a3TtgT1qiSHoTWADskHS3Y8YioASEwcW34JKkMLgwuzC/MMEWs+sWVAKiNdGisOswuznRDmBunV13A6l7g/D/P16SkwylJVrZTcKOi5Y/mReALcn0fiRDu5fb82lUACNJ8k9jOtqA30EbxRmkmRGqAAAAAElFTkSuQmCC" altText="Branches Icon" number="4" label="Branches" />
          <StatCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAr9JREFUSEu1lVuITnEUxX+LEkJCLuGF5F4MSuMyuRZ5ZKZGLvEyuQ1RmiKUiBBCeVCUwvDKFHIZl0GEXB4kEjGJkog82M4e+5u+Ob7zjZfZdV7O2f//2nuvtdcRbRxq4/spCmBm7YF5wARgLDAuCroPPATuJd/OS/qdVWgmgJkNAk7H5cUavQ1USnpTKKkggJlVAfuATsAd4AhwFXgblwwEpgOrooDvQLWkY2mQfwDMbAVwOBJ3AptyIzAz8/eSms6ZWbukiF3AhsivknQ0H6QFgJkNBp4CHSPpCTBN0ue4MA3QG7gMjI5872Rk/riaAaKaG0ApsBpYGqS+BA4BawDnxeMVcDDyvKgHwIl453eUSfpbTK4dM5sE3AQaJJWaWfdkzvV51WUR7V1OlfTFzBqAif5IupsGWA/sCbK8Op/x4qisEdiYdHcxUGbH7PsCiySdjHzv8gCwTtL+NMDZZP7zgfGSvGUH8HYnAxWSavNbMLNy4ExS/RVJMyK/JMZVK6kiDeASHJAxh66SvqUAeiYy/ZSR/y6RrEu5BQcfAG+5UPTKKSmPs2IAjYlc+6UBLgBzgBJJbgM+IifdyS+X5CNsjrwR1Usqi3xX4C2gTtLcNMAOoMaXRtLeOLAEOA44yb5MlwD3p1nAbqBPiuQtybmtwHZJm9MATop7zwtgRKKoLi7ZhMjhWfqM94+BKcBP4DXQH1gg6VwaoDPwCBgCuGQr8xbNvch9J2vR3K/qEk63RYFjJP1oARAjGRUy6xDV+RLNlPQxvheyiutJ58Mi/1dw+CzXdSGzqwaaliRctEbS1wyAbrFw7r4eKyV5t82RZdfLw1d8bG50bsNO9vM46T+fhcCyJK9HIgDfkbX/Zdc5aDPzRTkVMi3G8zUHk/S+UFKr/2QzG+pmlvc4D26CTY8kV11mtArQikRb/dzmAH8AExcCKJrho18AAAAASUVORK5CYII=" altText="Machines Icon" number="232+" label="Machines" />
          <StatCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIFJREFUSEvtVMkNgDAMs4eA/ZiCGZiC/WAII6T20UsKlCKB2ndjO3YSovFjY3yYCSRNABYnaCa5WsRdIdgADA50Jzl+jqCtRRY7cn+SDCTpLthZRzLAfJ8gp77UVazWZFEniB0wbfJ/MvBT4zt6fIo6QfEExZ73DGqudVJr2uQaxgP2WGwZvcVFNgAAAABJRU5ErkJggg==" altText="Trainers Icon" number="40+" label="Trainers" />
          <StatCard iconSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATBJREFUSEvNlb8uBVEQxn+fRjyCSAgKSol4ALVCw5sgoUEiN4SnUdxST0ej8y/iGW40Y8/NXLmWkZOzu2GTzSa753y/mW/OzoiOL3WszxeAmW0Cp8ByIfge2JHUH+2vA16BmULx0bYHSYsRwNIHSUXWmdm3/fUM/g5gZtvACZCC2JN0WbeyUQZm9gZMu+ijpIW2AeMH4EXSXNuALaAHvFf3QesW5Rzd4hqY2aoXeM1B157F7Ti4CODiN8BELYtk1Yqk9PcOr1LAFbAeWNSXtNEUMAAmA8BA0lQjQE5x/xXgGZgNoj6ueuCRFzM9D4N1T5Lmo26a5sEZsBRB/H0kfgfsh/Mg8rvqwj9F/JnRb3XK7vtmdp6mlYtdSNrNOQDZAPc+QdJAyhIfrs2JosmazgEfFFm+GdELjgAAAAAASUVORK5CYII=" altText="Clients Icon" number="12,889+" label="Clients" />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
