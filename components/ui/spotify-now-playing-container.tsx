"use client";

export function SpotifyNowPlayingContainer() {

  const track = {
    title: "Tomhet",
    artist: "Burzum",
    albumArtUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/tomhet.jpg`,
    songUrl: "https://www.youtube.com/watch?v=aTtNe8E0AoQ&list=RDaTtNe8E0AoQ&start_radio=1",
  };

  return (
    <div style={{ opacity: 1 }}>
      <a href={track.songUrl} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-border p-4 flex items-center gap-4 bg-card/80 backdrop-blur-md hover:bg-card/40 transition-colors">
        <div style={{opacity: 1, transform: 'none'}}>
          <img src={track.albumArtUrl} alt={track.title} className="rounded-md shadow-sm" width="64" height="64"/>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="text-sm text-muted-foreground font-mono mb-1">LAST LISTENED</div>
          <div className="font-medium truncate group-hover:underline">{track.title}</div>
          <div className="text-sm text-muted-foreground truncate">{track.artist}</div>
        </div>
      </a>
    </div>
  );
}
