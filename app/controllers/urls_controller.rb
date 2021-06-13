class UrlsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]
  def new
    @url = Url.new
    @created = params[:created]
  end

  def create
    @url = Url.new(url_params)
    rand = ('a'..'z').to_a.sample
    index = Url.last.id + 1
    @url.short_url = "#{rand}#{index}" if @url.short_url == ""
    if @url.save!
      # redirect_to root_path(@url.short_url)
      redirect_to controller: 'urls', action: 'new', created: "#{@url.short_url}"
    else 
      render :new
    end
  end

  def show
    @url = Url.friendly.find(params[:id])
    redirect_to "#{@url.long_url}"
  end

  private

  def url_params
    params.require(:url).permit(:short_url, :long_url, :slug)
  end
end
