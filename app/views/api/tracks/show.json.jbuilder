json.set! @track.id do 
    json.extract! @track, :id, :title, :user_id, :user
    json.fileUrl url_for(@track.track)
    json.imageUrl url_for(@track.image)
end